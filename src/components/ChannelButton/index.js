import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

function ChannelButton(props) {
  const { selected, channelName } = props;

  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div className="channel-options">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;
