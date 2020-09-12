import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

function ChannelButton() {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <span>general</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;
