import React, {useEffect, useState} from "react";
import AuthContext from "../context/auth-context";
import {Redirect, useParams} from "react-router-dom";
import {getTicket} from "../services/api/show-ticket-service";
import {ErrorPage} from "./ErrorPage";

export const ShowTicket = () => {
  let { hash } = useParams();

  const [ticket, setTicket] = useState([]);
  const [flag, setFlag] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      getTicket(hash).then(setTicket)
        .catch(setErr);
    }
  }, [flag, ticket]);

  return (
    <AuthContext.Consumer>
      {({signedIn, setSignedIn}) => (
        <div className="p-5 mb-4 bg-light rounded-3">
          {!signedIn ? <Redirect to="/signin"/>
            :
            <>
              {err !== null ? <ErrorPage message={err.message}/>
                :
                <>
                    <div className="mb-3 row">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input type="text"
                               id="title"
                               name="title"
                               className="form-control"
                               readOnly
                               aria-describedby="basic-addon1"
                               defaultValue={ticket.title}
                               required/>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">Content</span>
                        <textarea className="form-control"
                                  readOnly
                                  aria-label="With textarea"
                                  id="content"
                                  aria-describedby="basic-addon1"
                                  defaultValue={ticket.content}
                                  required/>
                      </div>
                    </div>

                    {ticket.showWarning &&
                    <div className="mb-3 row">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon-count">Readings count</span>
                        <input type="number"
                               id="count"
                               readOnly
                               name="count"
                               className="form-control"
                               defaultValue={ticket.readingsCount}
                               required/>
                      </div>
                    </div>
                    }
                </>
              }
            </>
          }
        </div>
      )}
    </AuthContext.Consumer>
  )
}