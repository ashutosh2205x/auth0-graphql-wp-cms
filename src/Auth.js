/*eslint no-restricted-globals : 0*/

import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
const LOGIN_SUCCESS_PAGE = "/profile";
const LOGIN_FAIL_PAGE = "/";
export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "akb2205.auth0.com",
    clientID: "cZChE5rLJ010zRJPXjvbwfhPMlnjNxjm",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://akb2205.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile",
  });

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.logout = this.logout.bind(this);
    this.getProfile = this.getProfile.bind(this);

  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, res) => {
      if (res && res.accessToken && res.idToken) {
        let expiration = JSON.stringify(
          res.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", res.accessToken);
        localStorage.setItem("id_token", res.idToken);
        localStorage.setItem("expires_at", expiration);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAIL_PAGE;
        console.log(err);
      }
    });
  }

  isAuthenticated() {
    let expirationPoint = localStorage.getItem("expires_at");
    let id_token = localStorage.getItem("id_token");
    let access_token = localStorage.getItem("access_token");
    let notExpired = new Date().getTime() < expirationPoint;
    if (id_token && access_token && notExpired) return true;
    else return false;
  }

  logout() {
    localStorage.removeItem("expires_at");
    localStorage.removeItem("id_token");
    localStorage.removeItem("access_token");
    location.pathname = "/";
  }

  getProfile() {
    let profile = localStorage.getItem("id_token");
    if (profile) {
      return (jwtDecode(profile));
    } else return {};
  }

  fetchUsers(){
    let url = "https://akb2205.auth0.com/api/v2/users"
  }
}
