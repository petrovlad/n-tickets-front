import React, {useEffect, useState} from "react";
import AuthContext from "../context/auth-context";
import {Redirect, useParams} from "react-router-dom";
import {getTicket} from "../services/api/show-ticket-service";
import {Ticket} from "../components/Ticket";

export const ShowTicket = () => {
  let { hash } = useParams();

  const [ticket, setTicket] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      getTicket(hash).then(result => {
        console.log(result);
        setTicket(result);
      })
    }
  }, [flag, ticket]);

  return (
    <AuthContext.Consumer>
      {({signedIn, setSignedIn}) => (
        <div className="p-5 mb-4 bg-light rounded-3">
          {signedIn ? <Ticket value={ticket}/> : <Redirect to="/signin"/>}
        </div>
      )}
    </AuthContext.Consumer>
  )
}