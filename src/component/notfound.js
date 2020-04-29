import React from "react";
import { Link } from "@reach/router";

function Notfound(props) {
  return (
    <div>
      Page doesn't exist
      <br />
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default Notfound;
