import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

function FetchServerChannels(server) {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("servers")
      .doc(server.id)
      .collection("channels")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        const newChannels = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setChannels(newChannels);
      });

    return () => unsubscribe();
  }, [server]);

  return channels;
}

// TODO: Add categories for channels (at least 2: default/welcome channel and the rest)
// TODO: Add the option to delete the channel (admin only)

function ChannelList(props) {
  const {
    currentServer,
    currentChannel,
    setCurrentChannel,
    setShowModals,
  } = props;
  const channels = FetchServerChannels(currentServer);

  return (
    <Container>
      <Category>
        <span>Text Channels</span>

        <AddCategoryIcon onClick={() => setShowModals(true)} />
      </Category>

      {channels.map((channel) => {
        return (
          <ChannelButton
            key={channel.id}
            selected={currentChannel.id === channel.id}
            channelName={channel.name}
            onClick={() => setCurrentChannel(channel)}
          />
        );
      })}
    </Container>
  );
}

export default ChannelList;
