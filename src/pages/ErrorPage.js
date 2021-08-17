import React from "react";
import {NavLink} from "react-router-dom";

export const ErrorPage = (props) => {
  return (
    <div className="pt-4">
      <h3>{props.message}</h3>
      <NavLink to="/">Go home.</NavLink>
    </div>
  )
}