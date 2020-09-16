import React, { useState } from "react";

import firebase from "../../firebase";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  Form,
  Header,
  InputWrapper,
  Label,
  Input,
  Footer,
  Button,
} from "./styles";

function AddChannelModal({ currentServer, isVisible, setIsVisible }) {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");

  // Saves a new channel to Cloud Firestore database.
  function addChannelToFirebase() {
    firebase
      .firestore()
      .collection("servers")
      .doc(currentServer.id)
      .collection("channels")
      .add({
        name: channelName,
        description: channelDescription,
      })
      .catch(function (error) {
        console.error("Error adding new channel to database", error);
      });

    closeModal();
  }

  function closeModal() {
    setIsVisible(false);
    setChannelName("");
    setChannelDescription("");
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
              <h1>Create text channel</h1>
            </Header>

            <InputWrapper>
              <Label>Channel name</Label>
              <Input
                type="text"
                maxLength="20"
                value={channelName}
                onChange={(e) => {
                  const pattern = /[\w-]/;
                  const str = e.target.value.toLowerCase();

                  if (pattern.test(str[str.length - 1])) setChannelName(str);
                }}
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Channel description</Label>
              <Input
                type="text"
                maxLength="80"
                value={channelDescription}
                onChange={(e) => {
                  setChannelDescription(e.target.value);
                }}
              />
            </InputWrapper>

            <Footer>
              <Button onClick={closeModal} isCancel>
                Cancel
              </Button>
              <Button onClick={addChannelToFirebase}>Create channel</Button>
            </Footer>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default AddChannelModal;
