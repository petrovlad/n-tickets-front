import React, {useContext, useState} from "react";
import {trySignIn} from "../services/api/auth-service";
import {NavLink, Redirect} from "react-router-dom";
import AuthContext from "../context/auth-context";

export const SignIn = () => {

  const usernameUpdated = (newValue) => { authContext.username = newValue }
  const passwordUpdated = (newValue) => { authContext.password = newValue }

  const authContext = useContext(AuthContext);

  const formSubmitted = (event) => {
    event.preventDefault();

    trySignIn(authContext.username, authContext.password)
      .then(result => authContext.setSignedIn(result))
      .catch(setErr);
  }

  const [err, setErr] = useState(false);

  return authContext.signedIn ? (<Redirect to="/"/>) : (
    <>
      <div className="d-flex justify-content-center text-center">
        <form onSubmit={formSubmitted}>
          <h1 className="h3 mb-3 fw-normal">Sign In!</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your username"
              required
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
              required
              onChange={event => passwordUpdated(event.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">Sign in</button>
          <p className="mt-3">Don't have an account? <NavLink to="/signup">Sign up here</NavLink></p>
        </form>
      </div>
      {err &&
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <p className="text-center m-0">
          <strong>Some error occured! </strong>
          Username or password are incorrect!
        </p>
      </div>
      }
    </>
  )
}
