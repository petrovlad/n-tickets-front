import React, {useContext} from "react";
import {Ticket} from "./Ticket";
import {isEmpty} from "./util/object-utils";
import TicketsContext from "../context/tickets-context";

export const TicketsList = () => {
  const tickets = useContext(TicketsContext).tickets;

  return (tickets == null || isEmpty(tickets) ?
      <p className="text-center">You have no tickets yet.</p>
      :
      <ul className="list-group" style={{listStyleType: "none"}}>
        {tickets.sort((a, b) => a.uniqueHash.localeCompare(b.uniqueHash)).map((ticket) => (
          <li key={ticket.uniqueHash}  style={{marginBottom: "15px"}}>
            <Ticket value={ticket}/>
          </li>
        ))}
      </ul>
  )
}