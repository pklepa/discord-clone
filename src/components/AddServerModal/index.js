import React, { useState } from "react";

import firebase from "../../firebase";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  Form,
  Header,
  FieldWrapper,
  Label,
  Input,
  InputWrapper,
  SearchIcon,
  ImagePreview,
  Footer,
  Button,
} from "./styles";

function AddServerModal({ isVisible, setIsVisible }) {
  const [serverName, setServerName] = useState("");
  const [serverDescription, setServerDescription] = useState("");
  const [serverPhotoUrl, setServerPhotoUrl] = useState("");
  const [serverPhotoPreview, setServerPhotoPreview] = useState(
    "https://user-images.githubusercontent.com/22618438/93387614-e792b100-f83f-11ea-86c8-a08b1c850a5e.png"
  );

  // Saves a new server to Cloud Firestore database.
  function addServerToFirebase() {
    firebase
      .firestore()
      .collection("servers")
      .add({
        name: serverName || "New Server",
        description: serverDescription || "A cool place to chat.",
        photoUrl: serverPhotoPreview,
      })
      .then(() => {
        alert("done");
      })
      .catch(function (error) {
        console.error("Error adding new server to database", error);
      });

    closeModal();
  }

  function closeModal() {
    setIsVisible(false);
    setServerName("");
    setServerDescription("");
    setServerPhotoUrl("");
    setServerPhotoPreview(
      "https://user-images.githubusercontent.com/22618438/93387614-e792b100-f83f-11ea-86c8-a08b1c850a5e.png"
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <Container
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Form
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            <Header>
              <h1>Create new server</h1>
            </Header>

            <FieldWrapper>
              <Label>Server name</Label>
              <Input
                type="text"
                maxLength="20"
                value={serverName}
                placeholder="New Server"
                onChange={(e) => {
                  const pattern = /[\w- ]/;
                  const str = e.target.value;

                  if (pattern.test(str[str.length - 1])) setServerName(str);
                }}
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label>Image URL</Label>

              <InputWrapper>
                <Input
                  type="text"
                  value={serverPhotoUrl}
                  placeholder={serverPhotoPreview}
                  onChange={(e) => {
                    const pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                    const str = e.target.value;

                    if (pattern.test(str)) setServerPhotoUrl(str);
                    else alert("Image must be a valid URL");

                    // setServerPhotoUrl(e.target.value);
                  }}
                />

                <SearchIcon
                  onClick={() => {
                    setServerPhotoPreview(serverPhotoUrl);
                  }}
                />
              </InputWrapper>

              <Label>Preview</Label>

              <ImagePreview
                src={serverPhotoPreview}
                alt="Server photo preview"
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label>Server description</Label>
              <Input
                type="text"
                maxLength="80"
                value={serverDescription}
                placeholder="A cool place to chat."
                onChange={(e) => {
                  setServerDescription(e.target.value);
                }}
              />
            </FieldWrapper>

            <Footer>
              <Button onClick={closeModal} isCancel>
                Cancel
              </Button>
              <Button onClick={addServerToFirebase}>Create server</Button>
            </Footer>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default AddServerModal;
