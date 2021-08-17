import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {Tickets} from "./pages/Tickets";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Navbar} from "./components/Navbar";
import {ShowTicket} from "./pages/ShowTicket";
import {ErrorPage} from "./pages/ErrorPage";
import {Footer} from "./components/Footer";
import {About} from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} exact component={About}/>
            <Route path={'/signup'} exact component={SignUp}/>
            <Route path={'/signin'} exact component={SignIn}/>
            <Route path={'/tickets'} exact component={Tickets}/>
            <Route path={'/ticket-:hash([a-z0-9]+)'} component={ShowTicket}/>
            <Route path={""} component={ErrorPage}/>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
