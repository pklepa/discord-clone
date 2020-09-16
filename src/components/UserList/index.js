import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

import { Container, Role, User, Avatar } from "./styles";

function UserRow(props) {
  const { nickname, isBot, profilePic, isOffline } = props;
  return (
    <User isOffline={isOffline}>
      <Avatar profilePic={profilePic} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
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
  const offlineUsers = [];
  const onlineUsers = allUsers.filter((user) => {
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
