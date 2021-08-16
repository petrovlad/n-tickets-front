import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

export const NotFound = () => {
  return (
    <Fragment>
      <NavLink to="/">Go home.</NavLink>
    </Fragment>
  )
}