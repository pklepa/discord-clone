import React, { useState } from "react";

import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";
import Modals from "../Modals";

function Layout() {
  const [currentServer, setCurrentServer] = useState({
    name: "Discount Discord",
    id: "SRV00",
  });
  const [currentChannel, setCurrentChannel] = useState({
    id: "CH00",
    name: "welcome",
    description: "Say hello!",
  });

  const [showModals, setShowModals] = useState(true);

  return (
    <Grid>
      <ServerList
        currentServer={currentServer}
        setCurrentServer={(server) => {
          setCurrentServer(server);
          setCurrentChannel({
            id: "CH00",
            name: "welcome",
            description: "Say hello!",
          });
        }}
      />

      <ServerName currentServer={currentServer} />

      <ChannelInfo currentChannel={currentChannel} />

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

      <Modals />
    </Grid>
  );
}

export default Layout;
