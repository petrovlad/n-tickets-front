import React from "react";
import {NavLink} from "react-router-dom";
import {checkSignedIn, trySignOut} from "../services/api/auth-service";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>

        <button className="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>

            {checkSignedIn() &&
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tickets" exact>My Tickets</NavLink>
              </li>
              <li className="nav-item">
                <form onSubmit={() => trySignOut()}>
                  <button className="btn btn-outline-warning btn-lg me-2" onClick={trySignOut}>Sign Out</button>
                </form>
              </li>
            </>
            }
          </ul>

        </div>
      </div>
    </nav>
  )
}