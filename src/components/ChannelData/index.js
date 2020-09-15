import React, { useState, useRef, useEffect } from "react";

import firebase from "../../firebase";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

function FetchChannelMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("servers")
      .doc("SRV00")
      .collection("channels")
      .doc("CH01")
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
  }, []);

  return messages;
}

function ChannelData() {
  const messages = FetchChannelMessages();

  const currentUser = {
    author: firebase.auth().currentUser.displayName,
    profilePicUrl:
      firebase.auth().currentUser.photoURL || "../../assets/images/discord.svg",
  };
  const [inputText, setInputText] = useState("");

  // Saves a new message to your Cloud Firestore database.
  function saveMessage(messageText) {
    // Add a new message entry to the database.
    return firebase
      .firestore()
      .collection("servers")
      .doc("SRV00")
      .collection("channels")
      .doc("CH01")
      .collection("messages")
      .add({
        author: currentUser.author,
        text: messageText,
        profilePicUrl: currentUser.profilePicUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        isBot: false,
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

        {messages.map((msg) => {
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
            />
          );
        })}
      </Messages>

      <InputWrapper>
        <Input
          type="text"
          placeholder="Conversar em #general"
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
