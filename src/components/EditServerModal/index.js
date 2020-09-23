import React, { useState, useEffect } from "react";

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

function EditServerModal({
  isVisible,
  setIsVisible,
  currentUser,
  currentServer,
}) {
  const [serverName, setServerName] = useState(currentServer.name);
  const [serverDescription, setServerDescription] = useState(
    currentServer.description
  );
  const [serverPhotoUrl, setServerPhotoUrl] = useState(currentServer.photoUrl);
  const [serverPhotoPreview, setServerPhotoPreview] = useState(
    currentServer.photoUrl
  );

  // Updates server in Cloud Firestore database.
  function updateServerInFirebase() {
    const docRef = firebase
      .firestore()
      .collection("servers")
      .doc(currentServer.id);

    docRef
      .update({
        name: serverName || "New Server",
        description: serverDescription || "No description provided",
        photoUrl: serverPhotoPreview,
      })
      .catch(function (error) {
        console.error("Error editing new server to database", error);
      });

    closeModal();
  }

  function closeModal() {
    setIsVisible(false);
  }

  useEffect(() => {
    setServerName(currentServer.name);
    setServerDescription(currentServer.description);
    setServerPhotoUrl(currentServer.photoUrl);
    setServerPhotoPreview(currentServer.photoUrl);
  }, [currentServer]);

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
              <h1>Edit server</h1>
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
                    // eslint-disable-next-line no-useless-escape
                    const pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                    const str = e.target.value;

                    if (pattern.test(str)) setServerPhotoUrl(str);
                    else alert("Image must be a valid URL");
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
              <Button
                onClick={() => {
                  updateServerInFirebase();
                }}
              >
                Update server information
              </Button>
            </Footer>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default EditServerModal;
