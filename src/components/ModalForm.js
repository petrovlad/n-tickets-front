import React, {useContext, useState} from "react";
import TicketsContext from "../context/tickets-context";
import {trySignIn} from "../services/api/auth-service";
import {postTicket, putTicket} from "../services/api/tickets-service";

export const ModalForm = (props) => {

  const {selectedTicket, setSelectedTicket} = useContext(TicketsContext);

  let title = selectedTicket.title;
  let content = selectedTicket.content;
  let showWarning = selectedTicket.showWarning || false;
  let readsCount = selectedTicket.readingsCount;
  let hash = selectedTicket.uniqueHash;

  const titleUpdated = (newValue) => { title = newValue };
  const contentUpdated = (newValue) => { content = newValue };
  const showWarningUpdated = (newValue) => {
    showWarning = !showWarning
    console.log(showWarning)
  };
  const readsCountUpdated = (newValue) => { readsCount = newValue };

  const formSubmitted = (event) => {
    event.preventDefault();

    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    if (!isEmpty(selectedTicket)) {
      // then we choose 'edit' function => put
      putTicket({title, content, showWarning, readingsCount:readsCount, uniqueHash: hash})
        .then(response => {
          console.log(response);
          window.location.reload();
        })
    } else {
      // otherwise we choose 'create new'
      postTicket({title, content, showWarning, readingsCount:readsCount})
        .then(response => {
          console.log(response);
          window.location.reload();
        })
    }
  }

  const onCloseClick = () => {
    setSelectedTicket({});
  }

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
         style={{display: "none"}} aria-modal="true" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={formSubmitted}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Edit ticket</h5>
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
                       id="flexSwitchCheckDefault"
                       defaultChecked={showWarning}
                       onChange={(event => showWarningUpdated(event.target.value))}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show warning</label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCloseClick}>Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}