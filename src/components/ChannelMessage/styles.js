import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &:hover {
    background-color: var(--primary-hover);

    & > div.same-author::before {
      opacity: 1;
    }
  }

  &.mention {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 13px;

  background-color: var(--secondary);
  background-image: url(${(props) => props.avatarUrl});
  background-size: cover;
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }

  &.hide {
    display: none;
  }
`;

export const Message = styled.div`
  min-height: ${(props) => (props.sameAuthor ? "10px" : "40px")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 13px;
  margin-left: 17px;

  position: relative;

  &.same-author {
    min-height: 10px;
    margin-top: 0;
    margin-left: 57px;

    &::before {
      opacity: 0;

      color: var(--gray);
      font-size: 12px;

      position: absolute;
      left: -53px;
      top: 3px;

      content: "${(props) => props.time}";
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;

  > strong {
    color: var(--white);
    font-size: 15px;
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

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 11px;
  }

  &.hide {
    display: none;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
