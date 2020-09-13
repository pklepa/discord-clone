import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

function ChannelData() {
  // This ref and effect will cause the Messages div to scroll to bottom each time a new message is posted or when its first loaded
  const messagesRef = useRef();
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Guilherme Rolamento"
          date="13/09/2020"
          content="I'm moving abroad in 2 months."
        />

        <ChannelMessage
          author="Robocop"
          date="13/09/2020"
          content={
            <>
              <Mention>@Rolamento</Mention>, good luck!
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />

        <ChannelMessage
          author="Spammer"
          date="13/09/2020"
          content="SPAN SPAN."
          isbot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #general" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
