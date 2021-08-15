import React, {useEffect, useState} from "react";
import {TicketsList} from "../components/TicketsList";
import AuthContext from "../context/auth-context";
import {Redirect} from "react-router-dom";
import {getTickets} from "../services/api/show-tickets-service";

export const ShowTickets = () => {
  console.log("show tickets")
  const [tickets, setTickets] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      getTickets().then(result => {
        setTickets(result);
      })
    }
  }, [flag, tickets]);

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