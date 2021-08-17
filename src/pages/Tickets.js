import React, {useEffect, useState} from "react";
import {TicketsList} from "../components/TicketsList";
import AuthContext from "../context/auth-context";
import {Redirect} from "react-router-dom";
import {getTickets} from "../services/api/tickets-service";
import {ModalForm} from "../components/modals/ModalForm";
import TicketsContext from "../context/tickets-context";
import {DeleteModalForm} from "../components/modals/DeleteModalForm";
import {LinearProgress} from "@material-ui/core";
import isEmpty from "../components/util/object-utils";

export const Tickets = () => {
  console.log("show tickets")
  const [tickets, setTickets] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      getTickets().then(setTickets);
    }
  }, [flag, tickets]);

  const [selectedTicket, setSelectedTicket] = useState({});

  return (
    <TicketsContext.Provider value={{selectedTicket, setSelectedTicket}}>
      <AuthContext.Consumer>
          {({signedIn, setSignedIn}) => (
            <div>
              <div>
                {signedIn ?
                  <>
                    {isEmpty(tickets) ?
                      <LinearProgress style={{margin: "10px"}}/>
                      :
                      <>
                        <TicketsList tickets={tickets}/>
                        <div style={{justifyContent: "center", display: "flex"}}>
                          <button type="button"
                                  className="btn btn-primary mb-4"
                                  data-bs-target="#exampleModalCenter"
                                  data-bs-toggle="modal"
                          >
                            Create new ticket
                          </button>
                        </div>
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