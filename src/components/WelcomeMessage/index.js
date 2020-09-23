import React from "react";

import { Container, HashtagIcon } from "./styles";

function WelcomeMessage({ channelName }) {
  return (
    <Container>
      <HashtagIcon />
      <h1>Welcome to #{channelName}!</h1>
      <span>This is the start of #{channelName} channel</span>
    </Container>
  );
}

export default WelcomeMessage;
