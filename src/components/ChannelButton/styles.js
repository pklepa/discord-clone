import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 8px 3px;
  margin-bottom: 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 200ms;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  > .channel-options {
    display: none;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > .channel-options {
      display: inline;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: var(--white);
  }
`;
