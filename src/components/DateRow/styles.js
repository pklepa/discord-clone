import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 5px;

  align-items: center;

  width: 100%;
  padding: 13px;

  > span {
    color: var(--gray);
    font-size: 11px;
    font-weight: bold;
  }

  > hr {
    width: 100%;
    height: 1px;
    border: 0.5px solid var(--chat-input);
  }
`;
