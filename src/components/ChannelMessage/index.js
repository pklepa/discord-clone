import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";
export { Mention } from "./styles";

function ChannelMessage(props) {
  const {
    author,
    timestamp,
    content,
    avatarUrl,
    hasMention,
    isBot,
    isAdmin,
    sameAuthor,
  } = props;

  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar
        className={`${isBot && "bot"} ${sameAuthor && "hide"}`}
        avatarUrl={avatarUrl}
      />

      <Message
        className={`${sameAuthor && "same-author"}`}
        time={timestamp.toTimeString().match(/(\d)+:{1}(\d){2}/)[0]}
      >
        <Header className={`${sameAuthor && "hide"}`}>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}
          {isAdmin && <span className="admin">Adm</span>}

          <time>{timestamp.toLocaleDateString()}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  );
}

export default ChannelMessage;
