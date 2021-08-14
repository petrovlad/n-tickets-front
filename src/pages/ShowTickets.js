import React, {Fragment} from "react";
import TicketsList from "../components/TicketsList";

export const ShowTickets = () => {
  const tickets = new Array(3)
    .fill('')
    .map((_, index) => ({id: index, title:`Ticket ${index}`}));

  return (
    <Fragment>
      <TicketsList tickets={tickets}/>
    </Fragment>
  )
}