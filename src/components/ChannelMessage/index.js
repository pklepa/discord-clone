import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";
export { Mention } from "./styles";

function ChannelMessage(props) {
  const {
    author,
    date,
    content,
    avatarUrl,
    hasMention,
    isBot,
    isAdmin,
  } = props;
  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar className={isBot ? "bot" : ""} avatarUrl={avatarUrl} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}
          {isAdmin && <span className="admin">Adm</span>}

          <time>{date}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  );
}

export default ChannelMessage;
