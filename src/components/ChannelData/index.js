import React, { useState, useRef, useEffect } from "react";

import firebase from "../../firebase";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

function FetchChannelMessages(server, channel) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("servers")
      .doc(server.id)
      .collection("channels")
      .doc(channel.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMessages(newMessages);
      });

    return () => unsubscribe();
  }, [channel, server]);

  return messages;
}

// TODO: Aggregate same author's messages
// TODO: Implement mentions (?)
// TODO: Format date conditionally (Today, at 10:30 / Yesterday, at 16:22)

function ChannelData({ currentUser, currentServer, currentChannel }) {
  const messages = FetchChannelMessages(currentServer, currentChannel);

  const [inputText, setInputText] = useState("");

  // This variable is used to determine if the ChannelMessage is to be render with or without the author's name and avatar
  let lastAuthor;

  // Saves a new message to your Cloud Firestore database.
  function saveMessage(messageText) {
    // Tests is current user is admin in current server
    const isAdmin =
      currentUser.isAdmin &&
      currentUser.isAdmin.reduce((prev, curr) => {
        return prev || curr === currentServer.id;
      }, false);

    // Add a new message entry to the database.
    return firebase
      .firestore()
      .collection("servers")
      .doc(currentServer.id)
      .collection("channels")
      .doc(currentChannel.id)
      .collection("messages")
      .add({
        author: currentUser.name,
        text: messageText,
        profilePicUrl: currentUser.photoUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        isBot: false,
        isAdmin: isAdmin,
      })
      .catch(function (error) {
        console.error("Error writing new message to database", error);
      });
  }

  // This ref and effect will cause the Messages div to scroll to bottom each time a new message is posted or when its first loaded
  const messagesRef = useRef();
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messages]);

  return (
    <Container>
      <Messages ref={messagesRef}>
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
          author="Robocop"
          date="13/09/2020"
          content="testeeeeee"
          isBot
          sameAuthor
        />

        <ChannelMessage
          author="Robocop"
          date="13/09/2020"
          content="ANOTHER ONE"
          isBot
          sameAuthor
        />

        {messages.map((msg) => {
          const sameAuthor = lastAuthor === msg.author;
          lastAuthor = msg.author;

          return (
            <ChannelMessage
              key={msg.id}
              author={msg.author}
              date={
                msg.timestamp
                  ? msg.timestamp.toDate().toLocaleDateString()
                  : Date.now()
              }
              avatarUrl={msg.profilePicUrl}
              content={msg.text}
              isBot={msg.isBot}
              isAdmin={msg.isAdmin}
              sameAuthor={sameAuthor}
            />
          );
        })}
      </Messages>

      <InputWrapper>
        <Input
          type="text"
          placeholder={`Conversar em #${currentChannel.name}`}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              saveMessage(inputText);
              setInputText("");
            }
          }}
        />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
