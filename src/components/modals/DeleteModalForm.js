import React from "react";


export const DeleteModalForm = () => {

  return (
    <div className="modal fade" id="exampleDeleteModal" tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
         style={{display: "none"}} aria-modal="true" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body p-4 text-center">
            <h5 className="mb-0">Enable this setting?</h5>
            <p className="mb-0">You can always change your mind in your account settings.</p>
          </div>
          <div className="modal-footer flex-nowrap p-0">
            <button type="button"
                    className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"><strong>Yes,
              enable</strong></button>
            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                    data-bs-dismiss="modal">No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}