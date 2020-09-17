import React, { useState } from "react";

import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";
import AddChannelModal from "../AddChannelModal";
import AddServerModal from "../AddServerModal";
import LogoutModal from "../LogoutModal";

function Layout({ setIsUserSignedIn }) {
  const [currentServer, setCurrentServer] = useState({
    name: "Discount Discord",
    id: "SRV00",
  });
  const [currentChannel, setCurrentChannel] = useState({
    id: "CH00",
    name: "welcome",
    description: "Say hello!",
  });

  const [showModals, setShowModals] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAddServerModal, setShowAddServerModal] = useState(false);

  return (
    <Grid>
      <ServerList
        setShowAddServerModal={setShowAddServerModal}
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
        setShowModals={setShowModals}
      />

      <UserInfo setShowLogoutModal={setShowLogoutModal} />

      <ChannelData
        currentServer={currentServer}
        currentChannel={currentChannel}
      />

      <UserList currentServer={currentServer} />

      <AddServerModal
        isVisible={showAddServerModal}
        setIsVisible={setShowAddServerModal}
      />

      <AddChannelModal
        currentServer={currentServer}
        isVisible={showModals}
        setIsVisible={setShowModals}
      />

      <LogoutModal
        isVisible={showLogoutModal}
        setIsVisible={setShowLogoutModal}
        setIsUserSignedIn={setIsUserSignedIn}
      />
    </Grid>
  );
}

export default Layout;
