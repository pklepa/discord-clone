import React from "react";

import { Container, Form, Header, LoginButton } from "./styles";

function LoginPage() {
  return (
    <Container>
      <Form>
        <Header>
          <h1>Welcome back!</h1>
          <span>It's great to see you again!</span>
        </Header>

        <LoginButton>Login with Google</LoginButton>
      </Form>
    </Container>
  );
}

export default LoginPage;
