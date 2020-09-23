import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  padding: 4px 16px;

  > h1 {
    color: var(--white);
    margin-bottom: 4px;
  }

  > span {
    color: var(--gray);
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 62px;
  height: 62px;

  background-color: var(--symbol);
  border-radius: 50%;

  color: var(--white);
  padding: 10px;
  margin-bottom: 10px;
`;
