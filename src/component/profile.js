import React from "react";
import { Link, Redirect, redirectTo } from "@reach/router";
import { more_query } from "../utils/query";
import { useQuery } from "@apollo/react-hooks";

function Profile(props) {
  console.log("profileprops", props);
  console.log("userdata", props);
  {
    return props.user.isAuthenticated() ? (
      <Page userdata={props} />
    ) : (
      <Redirect from="/profile" to="/login" />
    );
  }
}

function Page(props) {
  console.log(props);
  let userdata = props.userdata.user.getProfile();

  const { loading, error, data } = useQuery(more_query);

  if (loading) return <div>Loading..</div>;

  if (error) return <div>Error..</div>;

  if (data)
    return (
      <>
        {console.log("data", data)}
        <p>you have logged in, {userdata.name} !</p>
        <div>
          <img
            src={userdata.picture}
            style={{ borderRadius: "50%", height: 100, width: 100 }}
          />
        </div>

        <Link to="/">Go to Home</Link>
        <br />

        <br />

        <br />
        <br />

        <button
          variant="contained"
          color="secondary"
          className="button3"
          onClick={props.userdata.user.logout}
        >
          Log out
        </button>
      </>
    );
}

export default Profile;
