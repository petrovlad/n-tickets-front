import React, {useEffect, useState} from "react";
import {TicketsList} from "../components/TicketsList";
import AuthContext from "../context/auth-context";
import {Redirect} from "react-router-dom";
import {getTickets} from "../services/api/tickets-service";
import {ModalForm} from "../components/ModalForm";
import TicketsContext from "../context/tickets-context";

export const Tickets = () => {
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

  const [selectedTicket, setSelectedTicket] = useState({});

  const getSelected = () => selectedTicket;

  return (
    <TicketsContext.Provider value={{selectedTicket, setSelectedTicket}}>
      <AuthContext.Consumer>
          {({signedIn, setSignedIn}) => (
            <div>
              <div className="p-5 mb-4 bg-light rounded-3">
                {signedIn ? <TicketsList tickets={tickets} /> : <Redirect to="/signin"/>}
              </div>

              <button type="button"
                      className="btn btn-primary mb-4"
                      data-bs-target="#exampleModalCenter"
                      data-bs-toggle="modal"
              >
                Create new ticket
              </button>
              <ModalForm getSelected={getSelected}/>
            </div>
          )}
      </AuthContext.Consumer>
    </TicketsContext.Provider>
  )
}