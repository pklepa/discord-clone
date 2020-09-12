import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

function ChannelInfo() {
  return (
    <Container>
      <HashtagIcon />
      <Title>general</Title>

      <Separator />

      <Description>something here</Description>
    </Container>
  );
}

export default ChannelInfo;
