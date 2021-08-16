import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {Tickets} from "./pages/Tickets";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Navbar} from "./components/Navbar";
import {AlertState} from "./context/alert/AlertState";
import {ShowTicket} from "./pages/ShowTicket";
import {NotFound} from "./pages/NotFound";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-5">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/signup'} exact component={SignUp}/>
            <Route path={'/signin'} exact component={SignIn}/>
            <Route path={'/tickets'} exact component={Tickets}/>
            <Route path={'/ticket-:hash([a-z0-9]+)'} component={ShowTicket}/>
            <Route path={""} component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
