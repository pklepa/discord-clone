import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

// TODO: Add a Github link on top

function ChannelInfo({ currentChannel }) {
  return (
    <Container>
      <HashtagIcon />
      <Title>{currentChannel.name}</Title>

      <Separator />

      <Description>{currentChannel.description}</Description>
    </Container>
  );
}

export default ChannelInfo;
