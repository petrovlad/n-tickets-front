import React from "react";
import {NavLink} from "react-router-dom";

export const ErrorModal = (props) => {
  return (
  <>
    <div className="modal-header text-center">
      <h4 className="modal-title w-100 mb-0">Some error occured!</h4>
    </div>
    <div className="modal-body p-4 text-center">
      <p className="mb-0">{props.message}</p>
    </div>
    <div className="modal-footer flex-nowrap p-0">
      <NavLink type="button"
               className="btn btn-lg btn-o btn-link text-secondary text-decoration-none col-6 m-0 rounded-0"
               data-bs-dismiss="modal" to="/">
        Go home
      </NavLink>
    </div>
  </>
  )
}