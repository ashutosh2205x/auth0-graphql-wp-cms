import React from "react";
import { Link } from "@reach/router";
import "../style/style.css";
function Login(props) {
  console.log("loginprops", props);
  return (
    <div>
      <button onClick={props.loginprops.login} className="button1">
        Login via Auth0
      </button>
      <br />
      <Link to="/">
        <button className="button2">Home page</button>
      </Link>
      <br />
      <Link to="/profile">
        <button className="button3">Profile page</button>
      </Link>
    </div>
  );
}

export default Login;
