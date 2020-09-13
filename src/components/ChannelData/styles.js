import styled from "styled-components";
import { AlternateEmail } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  font-size: 15px;
  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 20px;
  height: 20px;
  color: var(--gray);

  position: relative;
  top: -50%;
  left: 14px;
  transition: 200ms ease-in-out;
`;
