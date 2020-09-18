import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";

function FetchServers() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("servers")
      .onSnapshot((snapshot) => {
        const newServers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setServers(newServers);
      });

    return () => unsubscribe();
  }, []);

  return servers;
}

function ServerList({
  currentServer,
  setCurrentServer,
  setShowAddServerModal,
}) {
  const servers = FetchServers();

  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      {servers.map((server) => {
        return (
          <ServerButton
            key={server.id}
            selected={currentServer.id === server.id}
            serverPhoto={server.photoUrl}
            onClick={() => setCurrentServer(server)}
            // hasNotifications
          />
        );
      })}

      <ServerButton
        isAddServerBtn
        onClick={() => setShowAddServerModal(true)}
      />
    </Container>
  );
}

export default ServerList;
