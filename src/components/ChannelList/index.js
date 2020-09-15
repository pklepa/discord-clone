import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

function FetchServerChannels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("servers")
      .doc("SRV00")
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
  }, []);

  return channels;
}

function ChannelList(props) {
  const channels = FetchServerChannels();
  const { currentChannel, setCurrentChannel } = props;

  return (
    <Container>
      <Category>
        <span>Text Channels</span>

        <AddCategoryIcon />
      </Category>

      {channels.map((channel) => {
        return (
          <ChannelButton
            selected={currentChannel === channel.id}
            channelName={channel.name}
            onClick={() => setCurrentChannel(channel.id)}
          />
        );
      })}
    </Container>
  );
}

export default ChannelList;
