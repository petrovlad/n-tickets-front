import React, {useContext} from "react";
import {trySignUp} from "../services/api/auth-service";
import {Redirect} from "react-router-dom";
import AuthContext from "../context/auth-context";

export const SignUp = () => {

  let username = '';
  let password = '';
  let email = '';

  const usernameUpdated = (newValue) => { username = newValue }
  const passwordUpdated = (newValue) => { password = newValue }
  const emailUpdated = (newValue) => { email = newValue }

  const authContext = useContext(AuthContext);

  const formSubmitted = (event) => {
    event.preventDefault();

    trySignUp(email, username, password)
      .then(result => authContext.setSignedIn(result))
  }

  return authContext.signedIn ? (<Redirect to="/"/>) : (
    <div className="d-flex justify-content-center text-center">
      <form onSubmit={formSubmitted}>
        <h1 className="h3 mb-3 fw-normal">Join Us!</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-1"
            id="floatingEmail"
            placeholder="Your email"
            onChange={event => emailUpdated(event.target.value)}
          />
          <label htmlFor="floatingPassword">Email</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Your username"
            onChange={event => usernameUpdated(event.target.value)}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control mb-1"
            id="floatingPassword"
            placeholder="Your password"
            onChange={event => passwordUpdated(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">Sign in</button>
      </form>
    </div>
  )
}