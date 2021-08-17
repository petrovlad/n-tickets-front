import React, {useContext} from "react";
import TicketsContext from "../../context/tickets-context";
import {postTicket, putTicket} from "../../services/api/tickets-service";
import {isEmpty} from "../util/object-utils";

export const ModalForm = () => {

  const context = useContext(TicketsContext);
  const tickets = context.tickets;
  const setTickets = context.setTickets;

  const {selectedTicket, setSelectedTicket} = useContext(TicketsContext);

  let title = selectedTicket.title || '';
  let content = selectedTicket.content || '';
  let showWarning = (selectedTicket.showWarning === undefined) ? false : selectedTicket.showWarning;
  let readsCount = selectedTicket.readingsCount;
  let hash = selectedTicket.uniqueHash;

  const titleUpdated = (newValue) => { title = newValue };
  const contentUpdated = (newValue) => { content = newValue };
  const showWarningUpdated = (newValue) => { showWarning = !showWarning };
  const readsCountUpdated = (newValue) => { readsCount = newValue };

  const formSubmitted = () => {
    if (!isEmpty(selectedTicket)) {
      // then we choose 'edit' function => put
      putTicket({title, content, showWarning, readingsCount:readsCount, uniqueHash: hash})
        .then(() => {
          let temp = [];
          temp = tickets.slice();
          for (let ticket of tickets) {
            if (ticket.uniqueHash === hash) {
              ticket.title = title;
              ticket.content = content;
              ticket.showWarning = showWarning;
              ticket.readingsCount = readsCount;
            }
          }
          setTickets(temp)
        })
    } else {
      // otherwise we choose 'create new'
      postTicket({title, content, showWarning, readingsCount:readsCount})
        .then(response => {
          let temp = tickets.slice();
          temp.push(response.data);
          temp.sort((a, b) => a.uniqueHash.localeCompare(b.uniqueHash));
          setTickets(temp);
        })
    }
    onCloseClick();
  }

  const onCloseClick = () => {
    setSelectedTicket({});
    // clear the form so all values returned to initial state
    // sorry for epilepsy btw
    document.getElementById("ticketForm").reset();
  }

  return (
    <TicketsContext.Consumer>
      {({selectedTicket, setSelectedTicket, tickets, setTickets}) => {
        return(
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
               style={{display: "none"}} aria-modal="true" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <form id="ticketForm">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">{!isEmpty(selectedTicket) ? "Edit" : "Create"} ticket</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCloseClick}/>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3 row">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input type="text"
                               id="title"
                               name="title"
                               className="form-control"
                               aria-describedby="basic-addon1"
                               defaultValue={title}
                               onChange={(event => titleUpdated(event.target.value))}
                               required/>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">content</span>
                        <textarea className="form-control"
                                  aria-label="With textarea"
                                  id="content"
                                  onChange={(event => contentUpdated(event.target.value))}
                                  aria-describedby="basic-addon1"
                                  defaultValue={content}
                                  required/>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon-count">Readings count</span>
                        <input type="number"
                               min={1}
                               id="count"
                               name="count"
                               className="form-control"
                               aria-describedby="basic-addon-count"
                               defaultValue={readsCount}
                               onChange={(event => readsCountUpdated(event.target.value))}
                               required/>
                      </div>
                    </div>


                    <div className="form-check form-switch">
                      <input className="form-check-input"
                             type="checkbox"
                             id="showWarningSwitch"
                             defaultChecked={showWarning}
                             onChange={(event => showWarningUpdated(event.target.value))}
                      />
                      <label className="form-check-label" htmlFor="showWarningSwitch">Show warning</label>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={onCloseClick}>Close</button>
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={() => formSubmitted()}>Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      }}
    </TicketsContext.Consumer>
  )
}