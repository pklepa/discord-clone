import styled from "styled-components";
import { motion } from "framer-motion";

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
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
  border-radius: 6px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;

  > h1 {
    text-transform: uppercase;
    color: var(--white);
    font-size: 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const Label = styled.div`
  text-transform: uppercase;
  color: var(--gray);
  font-size: 12px;
  font-weight: 400;

  margin-bottom: 8px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 10px;
  margin-bottom: 16px;

  background-color: var(--secondary);
  border-radius: 6px;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  /* background-color: var(--gray); */
  background-image: url(${(props) => props.googleProfilePic});
  background-size: cover;
  background-repeat: no-repeat;

  flex-shrink: 0;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12px;

  > h1 {
    color: var(--white);
    font-size: 17px;
  }

  > span {
    color: var(--gray);
    font-size: 14px;

    margin-top: 6px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;

  color: var(--white);
  font-size: 15px;

  background-color: var(--secondary);
  border: 1px solid transparent;
  border-radius: 6px;

  &:focus {
    border: 1px solid var(--discord);
  }
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
