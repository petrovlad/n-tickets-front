import React from "react";

export const Ticket = (props) => {
  const ticket = props.value;
  return (ticket ?
      <p>{ticket.title}-{ticket.uniqueHash}</p> : <p>Ticket doesn't exist</p>
  )
}