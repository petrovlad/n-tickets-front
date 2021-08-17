import React, {useEffect, useState} from "react";
import {TicketsList} from "../components/TicketsList";
import AuthContext from "../context/auth-context";
import {Redirect} from "react-router-dom";
import {getTickets} from "../services/api/tickets-service";
import {ModalForm} from "../components/modals/ModalForm";
import TicketsContext from "../context/tickets-context";
import {DeleteModalForm} from "../components/modals/DeleteModalForm";
import {LinearProgress} from "@material-ui/core";

export const Tickets = () => {
  const [tickets, setTickets] = useState({});
  const [flag, setFlag] = useState(false);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      getTickets().then((tickets) => {
        setTickets(tickets);
        setLoading(false)
      });
    }
  }, [flag, tickets]);

  const [selectedTicket, setSelectedTicket] = useState({});

  return (
    <TicketsContext.Provider value={{selectedTicket, setSelectedTicket, tickets, setTickets}}>
      <AuthContext.Consumer>
          {({signedIn, setSignedIn}) => (
            <div>
              <div>
                {signedIn ?
                  <>
                    {loading ?
                      <LinearProgress style={{margin: "10px"}}/>
                      :
                      <>
                        <div style={{justifyContent: "center", display: "flex"}}>
                          <button type="button"
                                  className="btn btn-secondary my-4"
                                  data-bs-target="#exampleModalCenter"
                                  data-bs-toggle="modal"
                          >
                            Create new ticket
                          </button>
                        </div>
                        <TicketsList />
                      </>
                    }
                  </>
                  :
                  <Redirect to="/signin"/>}
              </div>

              <ModalForm />

              <DeleteModalForm />
            </div>
          )}
      </AuthContext.Consumer>
    </TicketsContext.Provider>
  )
}