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
  const username = firebase.auth().currentUser.displayName;
  const profilePic =
    firebase.auth().currentUser.photoURL || "../../assets/images/discord.svg";

  // Adds a size to Google Profile pics URLs.
  function addSizeToGoogleProfilePic(url) {
    if (
      url.indexOf("googleusercontent.com") !== -1 &&
      url.indexOf("?") === -1
    ) {
      return url + "?sz=32";
    }
    return url;
  }

  return (
    <Container>
      <Profile>
        <Avatar googleProfilePic={addSizeToGoogleProfilePic(profilePic)} />
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
