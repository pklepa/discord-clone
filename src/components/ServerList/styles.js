import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);

  padding: 12px 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  height: 2px;
  width: 32px;

  border-radius: 1px;
  background-color: var(--secondary);

  margin-bottom: 8px;
`;
