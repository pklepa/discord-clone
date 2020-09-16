import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

import { Container, Role, User, Avatar } from "./styles";

function UserRow(props) {
  const { nickname, isBot, profilePic } = props;
  return (
    <User>
      <Avatar profilePic={profilePic} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

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
  const users = FetchServerUsers();

  return (
    <Container>
      <Role>Online Recently - {users.length}</Role>
      {users.map((user) => {
        return (
          <UserRow
            key={user.id}
            nickname={user.name}
            isBot={user.isBot}
            profilePic={user.photoUrl}
          />
        );
      })}

      <Role>Offline - 18</Role>
    </Container>
  );
}

export default UserList;
