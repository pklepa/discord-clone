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
  const [currentServer, setCurrentServer] = useState("SRV00");
  const [currentChannel, setCurrentChannel] = useState("CH00");

  return (
    <Grid>
      <ServerList
        currentServer={currentServer}
        setCurrentServer={(server) => {
          setCurrentServer(server);
          setCurrentChannel("CH00");
        }}
      />
      <ServerName />
      <ChannelInfo />
      <ChannelList
        currentServer={currentServer}
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
      />
      <UserInfo />

      <ChannelData
        currentServer={currentServer}
        currentChannel={currentChannel}
      />
      <UserList />
    </Grid>
  );
}

export default Layout;
