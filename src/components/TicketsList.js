import React from "react";
import {Ticket} from "./Ticket";
import isEmpty from "./util/object-utils";

export const TicketsList = (props) => {
  const tickets = props.tickets;

  return (!isEmpty(tickets) ?
      <ul className="list-group" style={{listStyleType: "none"}}>
        {tickets.sort((a, b) => a.uniqueHash.localeCompare(b.uniqueHash)).map((ticket) => (
          <li key={ticket.uniqueHash}  style={{marginBottom: "15px"}}>
            <Ticket value={ticket}/>
          </li>
        ))}
      </ul>
      :
      <p className="text-center">You have no tickets yet.</p>
  )
}