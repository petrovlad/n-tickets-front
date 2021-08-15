import React from "react";

export const Ticket = (props) => {
  const ticket = props.value;
  return (ticket ?
      <p>{ticket.title}</p> : <p>You have no tickets yet</p>
  )
}