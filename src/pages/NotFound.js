import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

export const NotFound = (props) => {
  return (
    <Fragment>
      <h3>{props.message}</h3>
      <NavLink to="/">Go home.</NavLink>
    </Fragment>
  )
}