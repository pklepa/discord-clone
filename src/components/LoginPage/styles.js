import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background: url("${(props) => props.img}");
  z-index: 10;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 600px;

  padding: 20px 26px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--primary);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    color: var(--white);
    font-size: 24px;
  }

  > span {
    color: var(--gray);
    font-size: 15px;

    margin-top: 5px;
  }
`;

export const LoginButton = styled.button`
  padding: 10px 40px;
  margin-top: 50px;

  color: var(--white);
  font-size: 18px;
  font-weight: 400;

  background-color: var(--discord);
  transition: background-color 200ms;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: var(--discord-dark);
  }
`;
