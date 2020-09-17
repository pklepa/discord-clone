import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 48px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 4px;
  background: transparent;
  transition: 200ms;

  opacity: ${(props) => (props.isOffline ? "0.5" : "1")};

  &:hover {
    background: var(--primary);
    opacity: 1;

    > strong {
      opacity: 1;
    }
  }

  > strong {
    margin-left: 13px;
    font-weight: 400;
    color: var(--white);
    font-size: 14px;

    opacity: 0.5;
    transition: opacity 200ms;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;

    &.admin {
      background-color: var(--notification);
    }
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-image: url(${(props) => props.profilePic});
  background-size: cover;
  background-repeat: no-repeat;
`;
