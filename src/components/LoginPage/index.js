import React, { useEffect } from "react";

import firebase from "../../firebase";

import { Container, Form, Header, LoginButton } from "./styles";

function LoginPage(props) {
  const { setIsUserSignedIn } = props;

  function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  // Saves a new message to your Cloud Firestore database.
  async function saveUser(user) {
    // Add a new message entry to the database.
    try {
      return firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(
          {
            name: user.displayName,
            photoUrl: user.photoURL,
            defaultServers: ["SRV00", "SRV01"],
          },
          { merge: true }
        );
    } catch (error) {
      console.error("Error adding user to database", error);
    }
  }

  useEffect(() => {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged((user) => {
      // If user successfully logged-in
      if (user) {
        saveUser(user).then(setIsUserSignedIn(true));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
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
