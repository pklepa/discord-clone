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

function ServerList() {
  const servers = FetchServers();
  const [currentServer, setCurrentServer] = useState("SRV00");

  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      {servers.map((server) => {
        return <ServerButton selected hasNotifications />;
      })}
      <ServerButton isAddServerBtn />
    </Container>
  );
}

export default ServerList;
