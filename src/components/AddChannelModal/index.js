import React, { useState } from "react";

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

function AddChannelModal({ isVisible, setIsVisible }) {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");

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
                onChange={(e) => setChannelName(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Channel description</Label>
              <Input
                type="text"
                maxLength="80"
                value={channelDescription}
                onChange={(e) => setChannelDescription(e.target.value)}
              />
            </InputWrapper>

            <Footer>
              <Button onClick={closeModal} isCancel>
                Cancel
              </Button>
              <Button>Create channel</Button>
            </Footer>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default AddChannelModal;
