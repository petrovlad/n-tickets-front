import React from "react";

export default function TicketsList(props) {
  let tickets = props.tickets;
  return (
    <ul className="list-group">
      {tickets.map(ticket => (
        <li className="list-group-item" key={ticket.id}>{ticket.title}</li>
      ))}
    </ul>
  )
}