import React, {useContext} from "react";
import {deleteTicket} from "../../services/api/tickets-service";
import TicketsContext from "../../context/tickets-context";

export const DeleteModalForm = () => {

  const {selectedTicket, setSelectedTicket} = useContext(TicketsContext);

  const onCancelClick = () => {
    setSelectedTicket({});
  }

  const formSubmitted = (event) => {
    event.preventDefault();

    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    if (!isEmpty(selectedTicket)) {
      deleteTicket({uniqueHash: selectedTicket.uniqueHash})
        .then(response => {
          window.location.reload();
        })
    }
  }

  return (
    <div className="modal fade" id="exampleDeleteModal" tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
         style={{display: "none"}} aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">
          <form onSubmit={formSubmitted}>
            <div className="modal-header text-center">
                <h5 className="modal-title w-100 mb-0">Are you sure you want to delete?</h5>
            </div>
            <div className="modal-body p-4 text-center">
              <p className="mb-0">This action cannot be undone.</p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button type="submit"
                      className="btn btn-lg btn-link fs-6 text-secondary text-decoration-none col-6 m-0 rounded-0 border-right">
                <strong>
                  Yes, delete
                </strong>
              </button>
              <button type="button"
                      className="btn btn-lg btn-link fs-6 text-secondary text-decoration-none col-6 m-0 rounded-0"
                      data-bs-dismiss="modal" onClick={onCancelClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}