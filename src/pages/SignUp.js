import React, {useContext, useState} from "react";
import {trySignUp} from "../services/api/auth-service";
import {NavLink, Redirect} from "react-router-dom";
import AuthContext from "../context/auth-context";

export const SignUp = () => {

  const usernameUpdated = (newValue) => { authContext.username = newValue }
  const passwordUpdated = (newValue) => { authContext.password = newValue }
  const emailUpdated = (newValue) => { authContext.email = newValue }

  const authContext = useContext(AuthContext);

  const formSubmitted = (event) => {
    event.preventDefault();

    trySignUp(authContext.email, authContext.username, authContext.password)
      .then(result => authContext.setSignedIn(result))
      .catch(setErr)
  }

  const [err, setErr] = useState(null);

  return authContext.signedIn ? (<Redirect to="/"/>) : (
    <>
      <div className="d-flex justify-content-center text-center">
        <form onSubmit={formSubmitted}>
          <h1 className="h3 mb-3 fw-normal">Join Us!</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Your email"
              onChange={event => emailUpdated(event.target.value)}
              required
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
              required
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
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">Sign up</button>
          <p className="mt-3">Already have an account? <NavLink to="/signin">Sign in here</NavLink></p>
        </form>
      </div>

      {err &&
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <p className="text-center m-0">
          <strong>Some error occured! </strong>
          Email or username already exists!
        </p>
      </div>
      }
    </>
  )
}