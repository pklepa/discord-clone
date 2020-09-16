import React from "react";

import { motion, AnimatePresence } from "framer-motion";
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

const AddChannelModal = ({ isVisible, setIsVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <Container
        onClick={() => setIsVisible(false)}
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
            <Input type="text" maxLength="20" />
          </InputWrapper>

          <InputWrapper>
            <Label>Channel description</Label>
            <Input type="text" maxLength="80" />
          </InputWrapper>

          <Footer>
            <Button isCancel>Cancel</Button>
            <Button>Create channel</Button>
          </Footer>
        </Form>
      </Container>
    )}
  </AnimatePresence>
);

export default AddChannelModal;
