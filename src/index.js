import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContext from './context/auth-context.js'
import {checkSignedIn} from "./services/api/auth-service";

const AppWrapper = () => {
  const [signedIn, setSignedIn] = useState(checkSignedIn());

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContext.Provider>
  )
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
