import React, { useState, useRef, useEffect } from "react";

import firebase from "../../firebase";

import ChannelMessage, { Mention } from "../ChannelMessage";
import DateRow from "../DateRow";

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

// TODO: Implement mentions (?)
// TODO: Format date conditionally (Today, at 10:30 / Yesterday, at 16:22)

function ChannelData({ currentUser, currentServer, currentChannel }) {
  const messages = FetchChannelMessages(currentServer, currentChannel);

  const [inputText, setInputText] = useState("");

  // This variable is used to determine if the ChannelMessage is to be render with or without the author's name and avatar
  let lastAuthor;
  let lastDate = new Date(0);

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
          timestamp={new Date(95, 6, 6)}
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
          timestamp={new Date(95, 6, 6)}
          content="testeeeeee"
          isBot
          sameAuthor
        />

        <ChannelMessage
          author="Robocop"
          timestamp={new Date(95, 6, 6)}
          content="ANOTHER ONE"
          isBot
          sameAuthor
        />

        {messages.map((msg) => {
          const newDay = !sameDay(
            lastDate,
            msg.timestamp ? msg.timestamp.toDate() : new Date()
          );
          lastDate = msg.timestamp ? msg.timestamp.toDate() : new Date();

          const sameAuthor = lastAuthor === msg.author;
          lastAuthor = msg.author;

          return (
            <React.Fragment key={msg.id}>
              {newDay && <DateRow date={msg.timestamp.toDate()} />}

              <ChannelMessage
                author={msg.author}
                timestamp={msg.timestamp ? msg.timestamp.toDate() : new Date()}
                avatarUrl={msg.profilePicUrl}
                content={msg.text}
                isBot={msg.isBot}
                isAdmin={msg.isAdmin}
                sameAuthor={sameAuthor && !newDay}
              />
            </React.Fragment>
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

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export default ChannelData;
