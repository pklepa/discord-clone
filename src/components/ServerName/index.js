import React from "react";

import { Container, Title, ExpandIcon } from "./styles";

// TODO: Add a modal with the option of leaving currentserver (not allowed to leave the default ones)
// TODO: Modal should also have the option to invite people in or kick people off
function ServerName({ currentServer, setShowEditServerModal }) {
  return (
    <Container>
      <Title>{currentServer.name}</Title>

      <ExpandIcon onClick={() => setShowEditServerModal(true)} />
    </Container>
  );
}

export default ServerName;
