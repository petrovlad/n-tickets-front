import React, {useState, useContext} from "react";

export const Form = () => {
  const [value, setValue] = useState('')

  return (
    <div className="modal-dialog modal-dialog-centered" style="width: 400px;">
      <div className="modal-content p-3">
        <form noValidate="" className="ng-untouched ng-pristine ng-valid">
          <div className="modal-header"><h5 id="staticBackdropLabel" className="modal-title">Edit or create field</h5>
            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"/>
          </div>
          <div className="modal-footer">
            <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Cancel
            </button>
            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}