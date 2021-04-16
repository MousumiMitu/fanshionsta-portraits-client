import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  const handleGoogleSignIN = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;

        var { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, image: photoURL };
        setLoggedInUser(signInUser);
        setUserToken();
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div>
      <h2>login page</h2>
      <h3>name:{loggedInUser.name}</h3>
      <button onClick={handleGoogleSignIN}>google sign in</button>
    </div>
  );
};

export default Login;
