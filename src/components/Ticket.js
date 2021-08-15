import React, {useContext} from "react";
import TicketsContext from "../context/tickets-context";

export const Ticket = (props) => {
  const ticket = props.value;

  const ticketContext = useContext(TicketsContext);

  const setSelected = (ticket) => {
    ticketContext.setSelectedTicket(ticket);
  }

  return (ticket ?
      <div>
        <p>{ticket.title}-{ticket.uniqueHash}</p>
        <button
          className="btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          onClick={() => setSelected(ticket)}
        >
          Edit
        </button>
      </div>
      : <p>Ticket doesn't exist</p>
  )
}