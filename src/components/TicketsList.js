import React from "react";

export const TicketsList = (props) => {
  const tickets = props.tickets;
  return (tickets ?
    <ul className="list-group">
      {tickets.map((ticket) => (
        <li className="list-group-item" key={ticket.uniqueHash}>{ticket.title}</li>
      ))}
    </ul> : <p>You have no tickets yet</p>
  )
}