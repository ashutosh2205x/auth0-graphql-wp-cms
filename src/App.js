import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, LocationProvider } from "@reach/router";
import Eg from "./component/eg";
import Auth from "./Auth";
import Login from "./component/login";
import Profile from "./component/profile";
import Notfound from "./component/notfound";
import { Callback } from "./component/callback";

let auth = new Auth();
let state = {};
/*eslint no-restricted-globals : 0*/

// console.log("user in appjs", auth.getProfile());
let username = auth.getProfile().given_name || "John Doe";
let initialState = {
  name: username,
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth: auth,
  picture: auth.getProfile().picture,
};
let mainComponent = "";

function App(props) {
  console.log("app js props", props.isAuthenticated());
  if (props.location === "callback") return <Callback />;
  return (
    <LocationProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <Eg path="/" />
            <Callback path="/callback" />
            <Profile path="profile" user={props} />
            <Login path="login" loginprops={props} />
            <Notfound default />
          </Router>
        </header>
      </div>
    </LocationProvider>
  );
}

export default App;
