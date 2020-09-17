import styled from "styled-components";
import { Mic, Headset, Settings } from "styled-icons/material";

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-image: url(${(props) => props.googleProfilePic});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 13px;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  > svg:not(:first-child) {
    margin-left: 7px;
  }

  > img {
    width: 20px;
    height: 20px;

    position: absolute;
    top: 0px;
    z-index: 20;
  }

  > img.mute-mic {
    left: 7px;
  }

  > img.mute-audio {
    left: 33px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  color: var(--white);
  opacity: 0.7;

  transition: opacity 200ms;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  color: var(--white);
  opacity: 0.7;

  transition: opacity 200ms;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  color: var(--white);
  opacity: 0.7;

  transition: opacity 200ms;

  &:hover {
    opacity: 1;
  }
`;
