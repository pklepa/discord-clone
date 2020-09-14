import React from "react";

import firebase from "../../firebase";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

function UserInfo() {
  // console.log(firebase.auth().currentUser);
  // const username = firebase.auth().currentUser.displayName || "Anonymous";
  const username = firebase.auth().currentUser.displayName || "Anonymous";

  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{username}</strong>
          <span>#1728</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;
