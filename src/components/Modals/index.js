import React from "react";

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

function Modals() {
  return (
    <Container>
      <Form>
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
  );
}

export default Modals;
