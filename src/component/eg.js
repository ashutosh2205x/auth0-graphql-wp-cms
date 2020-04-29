import { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

const Eg = (props) => {
  return (
    <div>
      HELLO
      <br />
      <Link to="/login">Login</Link>
    </div>
  );


   
};

export default Eg;
