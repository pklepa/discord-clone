import React from "react";

import { Container, Title, ExpandIcon } from "./styles";

function ServerName({ currentServer }) {
  return (
    <Container>
      <Title>{currentServer.name}</Title>

      <ExpandIcon />
    </Container>
  );
}

export default ServerName;
