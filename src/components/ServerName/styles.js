import styled from "styled-components";
import { ExpandMore } from "styled-icons/material";

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
  background-color: var(--secondary);

  /* box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0; */
  /* z-index: 2; */
  border-bottom: 1px solid var(--quaternary);
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;
