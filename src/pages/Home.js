import React, {Fragment} from "react";

export const Home = () => {
  return (
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container">
          <h1 className="display-5 fw-bold">Hello from NTickets App!</h1>
          <p className="col-md-8 fs-4">Help me please.</p>
          <button className="btn btn-outline-secondary btn-lg me-2" type="button">Sign In</button>
          <button className="btn btn-secondary btn-lg" type="button">Sign Up</button>
        </div>
      </div>
  )
}
