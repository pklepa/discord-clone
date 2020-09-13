import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Text Channels</span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton selected channelName="general" />
      <ChannelButton channelName="work wrok rwok" />
      <ChannelButton channelName="liga das lendas" />
      <ChannelButton channelName="valente" />
      <ChannelButton channelName="fall bois" />
    </Container>
  );
}

export default ChannelList;
