import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {checkSignedIn} from "../services/api/auth-service";
import AuthContext from "../context/auth-context";

export const Home = () => {
  return (
    <AuthContext.Consumer>
      {({signedIn, setSignedIn}) => (
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container">
          <h1 className="display-5 fw-bold">Hello from NTickets App!</h1>
          <p className="col-md-8 fs-4">Help me please.</p>
          {signedIn ?
            <NavLink className="btn btn-secondary btn-lg" to="/tickets">Go to my tickets</NavLink>
            :
            <>
              <NavLink className="btn btn-outline-secondary btn-lg me-2" to="/signin">Sign In</NavLink>
              <NavLink className="btn btn-secondary btn-lg" to="/signup">Sign Up</NavLink>
            </>
          }
        </div>
      </div>
      )}
    </AuthContext.Consumer>
  )
}
