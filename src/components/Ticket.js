import React, {useContext} from "react";
import TicketsContext from "../context/tickets-context";

export const Ticket = (props) => {
  const ticket = props.value;

  const ticketContext = useContext(TicketsContext);

  const setSelected = (ticket) => {
    console.log(ticket)
    ticketContext.setSelectedTicket(ticket);
  }

  return (ticket ?
      <div>
        <p>{ticket.title}-{ticket.readingsCount}-{ticket.uniqueHash}</p>

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
              onClick={() => setSelected(ticket)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      : <p>Ticket doesn't exist</p>
  )
}