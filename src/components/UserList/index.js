import React from "react";

import { Container, Role, User, Avatar } from "./styles";

function UserRow(props) {
  const { nickname, isBot } = props;
  return (
    <User>
      <Avatar isBot={isBot} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

function UserList() {
  return (
    <Container>
      <Role>Online - 1</Role>
      <UserRow nickname="Guilherme Rodz" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Long long ass name bot" isBot />

      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
    </Container>
  );
}

export default UserList;
