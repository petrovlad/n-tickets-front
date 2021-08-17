import React from "react";
import {NavLink} from "react-router-dom";
import {trySignOut} from "../services/api/auth-service";
import AuthContext from "../context/auth-context";

export const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {({signedIn, setSignedIn}) => (
      <nav className="navbar navbar-dark navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NTickets</NavLink>

          <button className="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
              </li>

              {signedIn &&
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tickets" exact>My Tickets</NavLink>
                </li>

              </>
              }
            </ul>
          </div>

          {signedIn &&
            <button className="btn btn-outline-warning me-2" onClick={() => {
              setSignedIn(false);
              trySignOut();
            }}>
              Sign Out
            </button>
          }
        </div>
      </nav>
      )}
    </AuthContext.Consumer>
  )
}