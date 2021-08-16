import React from "react";


export const DeleteModalForm = () => {

  return (
    <div className="modal fade" id="exampleDeleteModal" tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
         style={{display: "none"}} aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header text-center">
              <h5 className="modal-title w-100 mb-0">Are you sure you want to delete?</h5>
          </div>
          <div className="modal-body p-4 text-center">
            <p className="mb-0">This action cannot be undone.</p>
          </div>
          <div className="modal-footer flex-nowrap p-0">
            <button type="button"
                    className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right">
              <strong>
                Yes, delete
              </strong>
            </button>
            <button type="button"
                    className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                    data-bs-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}