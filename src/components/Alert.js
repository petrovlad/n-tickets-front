import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext);

  if (!alert) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Holy fuck!</strong> {alert.message}
      <button type="button" className="btn-close" aria-label="Close" onClick={hide}/>
    </div>
  )
}