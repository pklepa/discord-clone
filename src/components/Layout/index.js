import React, { useState } from "react";

import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";
import AboutModal from "../AboutModal";
import AddChannelModal from "../AddChannelModal";
import AddServerModal from "../AddServerModal";
import LogoutModal from "../LogoutModal";

function Layout({ currentUser, setIsUserSignedIn }) {
  const [currentServer, setCurrentServer] = useState({
    name: "Discount Discord",
    id: "SRV00",
  });
  const [currentChannel, setCurrentChannel] = useState({
    id: "CH00",
    name: "welcome",
    description: "Say hello!",
  });

  const [showAddChannelModal, setShowAddChannelModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAddServerModal, setShowAddServerModal] = useState(false);

  return (
    <Grid>
      <ServerList
        setShowAboutModal={setShowAboutModal}
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
        setShowAddChannelModal={setShowAddChannelModal}
      />

      <UserInfo
        currentUser={currentUser}
        setShowLogoutModal={setShowLogoutModal}
      />

      <ChannelData
        currentUser={currentUser}
        currentServer={currentServer}
        currentChannel={currentChannel}
      />

      <UserList
        currentServer={currentServer}
        currentUser={currentUser}
        setShowLogoutModal={setShowLogoutModal}
      />

      <AboutModal isVisible={showAboutModal} setIsVisible={setShowAboutModal} />

      <AddServerModal
        currentUser={currentUser}
        isVisible={showAddServerModal}
        setIsVisible={setShowAddServerModal}
      />

      <AddChannelModal
        currentServer={currentServer}
        isVisible={showAddChannelModal}
        setIsVisible={setShowAddChannelModal}
      />

      <LogoutModal
        currentUser={currentUser}
        isVisible={showLogoutModal}
        setIsVisible={setShowLogoutModal}
        setIsUserSignedIn={setIsUserSignedIn}
      />
    </Grid>
  );
}

export default Layout;
