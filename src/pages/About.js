import React from "react";
import {NavLink} from "react-router-dom";

export const About = () => {
  return (
    <div className="pt-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container">
          <h1 className="display-5 fw-bold">What this app is about?</h1>
          <p className="col-md-8 fs-4">
            The application is used to share N-time messages called <strong>tickets</strong>.
            Registered user can create a ticket and share it to anyone via URL.
            Ticket is a message available for reading only <strong>N times</strong>, where N is given by the creator.
            Reading a ticket means <strong>opening a page with the ticket</strong>.
            Ticket becomes unavailable after N readings. Ticket may warn a reader about remaining readings count.
            <br/><br/>
            <a href="https://github.com/petrovlad/n-tickets">
              This project's Github repository.
            </a>
          </p>
          <NavLink className="btn btn-secondary btn-lg" to="/">Go back to home.</NavLink>

        </div>
      </div>
    </div>
  )
}