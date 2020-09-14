import React, { useEffect, useState } from "react";

import firebase from "../../firebase";

import { Container, Form, Header, LoginButton } from "./styles";

function LoginPage() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(
    firebase.auth().currentUser ? true : false
  );

  function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  function authStateObserver(user) {
    // If user successfully logged-in
    if (user) {
      setIsUserSignedIn(true);
    }
  }

  useEffect(() => {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
  }, []);

  return (
    <Container className={isUserSignedIn ? "hidden" : ""}>
      <Form>
        <Header>
          <h1>Welcome back!</h1>
          <span>It's great to see you again!</span>
        </Header>

        <LoginButton onClick={signIn}>Login with Google</LoginButton>
      </Form>
    </Container>
  );
}

export default LoginPage;
