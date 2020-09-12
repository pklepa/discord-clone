import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background-color: var(--primary);
  color: var(--white);

  height: 48px;
  width: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  position: relative;
  cursor: pointer;

  transition: border-radius 200ms, background-color 200ms;

  :hover,
  :active {
    background-color: var(--discord);
    border-radius: 15px;
  }

  &::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);

    content: "";
    opacity: ${(props) => (props.hasNotifications ? 1 : 0)};

    transition: opacity 300ms;
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: "${(props) => props.mentions && props.mentions}";
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};
  }

  :hover::before {
    opacity: 1;

    height: 20px;
    border-radius: 10px;
    top: calc(50% - 10px);
  }

  > img {
    max-width: 30px;
    max-height: 30px;
  }
`;
