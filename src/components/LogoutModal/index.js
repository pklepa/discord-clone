import React from "react";

import firebase from "../../firebase";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  Form,
  Header,
  Content,
  Label,
  Profile,
  Avatar,
  UserDetails,
  Footer,
  Button,
} from "./styles";

function LogoutModal({
  currentUser,
  isVisible,
  setIsVisible,
  setIsUserSignedIn,
}) {
  function closeModal() {
    setIsVisible(false);
  }

  function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
    setIsUserSignedIn(false);
    closeModal();
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <Container
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Form
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            <Header>
              <h1>Sign out</h1>
            </Header>

            <Content>
              <Label>Currently signed in as</Label>
              <Profile>
                <Avatar googleProfilePic={currentUser.photoUrl} />

                <UserDetails>
                  <h1>{currentUser.name}</h1>
                  <span>
                    #{currentUser.uid.match(/\d+/g).join("").slice(0, 4)}
                  </span>
                </UserDetails>
              </Profile>
            </Content>

            <Footer>
              <Button onClick={closeModal} isCancel>
                Cancel
              </Button>
              <Button onClick={signOut}>Sign out</Button>
            </Footer>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default LogoutModal;
