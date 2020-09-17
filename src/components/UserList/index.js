import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

import { Container, Role, User, Avatar } from "./styles";

function UserRow(props) {
  const { nickname, isBot, isAdmin, profilePic, isOffline } = props;
  return (
    <User isOffline={isOffline}>
      <Avatar profilePic={profilePic} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
      {isAdmin && <span className="admin">Adm</span>}
    </User>
  );
}

// TODO: Fetch only users that are in the current server
function FetchServerUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        const updatedUsers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(updatedUsers);
      });

    return () => unsubscribe();
  }, []);

  return users;
}

function UserList({ currentServer }) {
  const allUsers = FetchServerUsers();
  const usersInCurrentServer = allUsers.filter((user) => {
    if (user.defaultServers.indexOf(currentServer.id) > -1) {
      return true;
    } else if (user.servers && user.servers.indexOf(currentServer.id) > -1) {
      return true;
    } else {
      return false;
    }
  });

  const offlineUsers = [];
  const onlineUsers = usersInCurrentServer.filter((user) => {
    if (user.isBot) return true;

    const today = new Date();
    const lastWeek = today.setDate(today.getDate() - 7);
    if (user.lastLogin && user.lastLogin.toDate() > lastWeek) return true;
    else offlineUsers.push(user);

    return false;
  });

  return (
    <Container>
      <Role>Online Recently - {onlineUsers.length}</Role>
      {onlineUsers.map((user) => {
        return (
          <UserRow
            key={user.id}
            nickname={user.name}
            isBot={user.isBot}
            profilePic={user.photoUrl}
            isAdmin={
              user.isAdmin &&
              user.isAdmin.reduce((prev, curr) => {
                return prev || curr === currentServer.id;
              }, false)
            }
          />
        );
      })}

      <Role>Offline - {offlineUsers.length}</Role>
      {offlineUsers.map((user) => {
        return (
          <UserRow
            key={user.id}
            nickname={user.name}
            isBot={user.isBot}
            profilePic={user.photoUrl}
            isOffline
          />
        );
      })}
    </Container>
  );
}

export default UserList;
