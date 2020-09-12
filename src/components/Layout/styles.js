import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: var(--discord);
`;

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UL - User List
// UI - User Info

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 72px 240px auto 240px;
  grid-template-rows: 48px auto 52px;

  grid-template-areas:
    "SL SN CI CI"
    "SL CL CD UL"
    "SL UI CD UL";

  height: 100vh;
`;
