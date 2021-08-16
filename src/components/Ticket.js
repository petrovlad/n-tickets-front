import React, {useContext} from "react";
import TicketsContext from "../context/tickets-context";
import {isVisible} from "bootstrap/js/src/util";

export const Ticket = (props) => {
  const ticket = props.value;

  const ticketContext = useContext(TicketsContext);

  const setSelected = (ticket) => {
    ticketContext.setSelectedTicket(ticket);
  }

  return (ticket ?
      <div>
        <p>{ticket.title}-{ticket.uniqueHash}</p>

        <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group">
            <button
              type="button"
              className="btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              onClick={() => setSelected(ticket)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleDeleteModal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      : <p>Ticket doesn't exist</p>
  )
}