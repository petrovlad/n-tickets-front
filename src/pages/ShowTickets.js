import React from "react";
import TicketsList from "../components/TicketsList";
import AuthContext from "../context/auth-context";
import {Redirect} from "react-router-dom";

export const ShowTickets = () => {
  const tickets = new Array(3)
    .fill('')
    .map((_, index) => ({id: index, title:`Ticket ${index}`}));

  return (
    <AuthContext.Consumer>
      {({signedIn, setSignedIn}) => (
        <div className="p-5 mb-4 bg-light rounded-3">
          {signedIn ? <TicketsList tickets={tickets}/> : <Redirect to="/signin"/>}
        </div>

      )}
    </AuthContext.Consumer>

  )
}