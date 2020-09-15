import React, { useState } from "react";

import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";

function Layout() {
  const [currentChannel, setCurrentChannel] = useState("CH00");

  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
      />
      <UserInfo />

      <ChannelData currentChannel={currentChannel} />
      <UserList />
    </Grid>
  );
}

export default Layout;
