import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";
export { Mention } from "./styles";

function ChannelMessage(props) {
  const { author, date, content, hasMention, isBot } = props;
  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar className={isBot ? "bot" : ""} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  );
}

export default ChannelMessage;
