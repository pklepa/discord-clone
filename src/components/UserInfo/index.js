import React from "react";

import RedBar from "../../assets/images/red-bar.svg";

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

function UserInfo({ currentUser, setShowLogoutModal }) {
  return (
    <Container>
      <Profile onClick={() => setShowLogoutModal(true)}>
        <Avatar googleProfilePic={currentUser.photoUrl} />
        <UserData>
          <strong>{currentUser.name}</strong>
          <span>#{currentUser.uid.match(/\d+/g).join("").slice(0, 4)}</span>
        </UserData>
      </Profile>

      <Icons>
        <img className="mute-mic" src={RedBar} alt="Mute" />
        <MicIcon />

        <img className="mute-audio" src={RedBar} alt="Mute" />
        <HeadphoneIcon />

        <SettingsIcon onClick={() => setShowLogoutModal(true)} />
      </Icons>
    </Container>
  );
}

export default UserInfo;
