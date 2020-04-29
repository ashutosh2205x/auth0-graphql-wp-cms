import React from "react";
import { Link } from "@reach/router";

function Login(props) {
  console.log("loginprops", props);
  return (
    <div>
      <button onClick={props.loginprops.login}>Login via Auth0</button>
      <br />
      <Link to="/">
        <button>Home page</button>
      </Link>
      <br />
      <Link to="/profile">
        <button>Profile page</button>
      </Link>
    </div>
  );
}

export default Login;
