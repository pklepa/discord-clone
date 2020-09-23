import styled from "styled-components";
import { motion } from "framer-motion";
import {
  ReactLogo,
  Firebase,
  StyledComponents,
  Framer,
  Github,
} from "styled-icons/simple-icons";

import { LogoChrome } from "styled-icons/ionicons-solid";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(motion.div)`
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
  border-radius: 6px;

  transition: height 300ms;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px;

  align-self: center;
  justify-self: center;

  > h1 {
    text-transform: uppercase;
    color: var(--white);
    font-size: 20px;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;

  > h1 {
    text-transform: uppercase;
    color: var(--white);
    font-size: 15px;
  }

  > p {
    color: var(--white);
    opacity: 0.8;

    font-weight: 300;
    font-size: 13px;

    margin-top: 6px;

    > a {
      color: var(--discord);
      font-weight: bold;
    }
  }

  > h1:not(:first-child) {
    margin-top: 16px;
  }
`;

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  margin: 8px auto 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;

  background-color: var(--secondary);
  border-radius: 6px;

  padding: 6px 4px;

  > span {
    color: white;
    font-size: 13px;
  }
`;
export const ReactIcon = styled(ReactLogo)`
  color: white;
  width: 24px;
  height: 24px;

  margin-right: 6px;
`;

export const StyledComponentsIcon = styled(StyledComponents)`
  color: white;
  width: 30px;
  height: 30px;

  margin-right: 6px;
`;

export const FirebaseIcon = styled(Firebase)`
  color: white;
  width: 24px;
  height: 24px;

  margin-right: 6px;
`;

export const FramerIcon = styled(Framer)`
  color: white;
  width: 24px;
  height: 24px;

  margin-right: 6px;
`;

export const GithubIcon = styled(Github)`
  color: white;
  width: 24px;
  height: 24px;

  margin-right: 6px;
`;

export const ChromeIcon = styled(LogoChrome)`
  color: white;
  width: 24px;
  height: 24px;

  margin-right: 6px;
`;

export const Footer = styled.div`
  height: 70px;
  width: 100%;
  padding: 16px;
  margin-top: 8px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: var(--secondary);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Button = styled.button`
  color: white;
  font-size: 13px;
  font-weight: 500;

  border-radius: 6px;
  background-color: ${(props) =>
    props.isCancel ? "transparent" : "var(--discord)"};
  transition: background-color 200ms;

  padding: 12px 16px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isCancel ? "transparent" : "var(--discord-dark)"};

    text-decoration: ${(props) => (props.isCancel ? "underline" : "none")};
  }
`;
