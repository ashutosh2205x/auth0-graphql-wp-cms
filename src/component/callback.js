import React from "react";
import Auth from "../Auth";

export const Callback = () => {
  React.useEffect(() => {
    const auth =new Auth();
    auth.handleAuthentication();
  });

  return <div>Loading....</div>;
};