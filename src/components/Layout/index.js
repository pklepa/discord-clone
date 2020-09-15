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
  const [currentServer, setCurrentServer] = useState({
    name: "Discount Discord",
    id: "SRV00",
  });
  const [currentChannel, setCurrentChannel] = useState({
    id: "CH00",
    name: "welcome",
  });

  return (
    <Grid>
      <ServerList
        currentServer={currentServer}
        setCurrentServer={(server) => {
          setCurrentServer(server);
          setCurrentChannel({
            id: "CH00",
            name: "welcome",
          });
        }}
      />
      <ServerName currentServer={currentServer} />
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
