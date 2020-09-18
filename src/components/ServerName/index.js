import React from "react";

import { Container, Title, ExpandIcon } from "./styles";

// TODO: Add a modal with the option of leaving currentserver (not allowed to leave the default ones)
// TODO: Modal should also have the option to invite people in or kick people off
function ServerName({ currentServer }) {
  return (
    <Container>
      <Title>{currentServer.name}</Title>

      <ExpandIcon />
    </Container>
  );
}

export default ServerName;
