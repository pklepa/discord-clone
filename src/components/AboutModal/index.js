import React from "react";

import { AnimatePresence } from "framer-motion";
import {
  Container,
  Form,
  Header,
  Content,
  IconsGrid,
  Item,
  ReactIcon,
  StyledComponentsIcon,
  FirebaseIcon,
  FramerIcon,
  GithubIcon,
  ChromeIcon,
  Footer,
  Button,
} from "./styles";

function AboutModal({ isVisible, setIsVisible }) {
  function closeModal() {
    setIsVisible(false);
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
              <h1>About Discount Discord</h1>
            </Header>

            <Content>
              <h1>What?</h1>
              <p>
                This website is a clone of the well known{" "}
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>{" "}
                app. It hosts a real time chat application amongst users and
                tries it's best to replicate the looks and feel of the original
                app.
              </p>

              <h1>How?</h1>
              <p>
                All of the source code is available on Github. There, you can
                see a detailed list of each tool used in this application as
                well as the inner workings of it all.
              </p>

              <p>That said, here's a summary of the core tech used:</p>

              <IconsGrid>
                <Item>
                  <ReactIcon />
                  <span>React</span>
                </Item>

                <Item>
                  <FirebaseIcon />
                  <span>Firebase</span>
                </Item>

                <Item>
                  <StyledComponentsIcon />
                  <span>Styled Components</span>
                </Item>

                <Item>
                  <FramerIcon />
                  <span>Framer</span>
                </Item>

                <Item>
                  <GithubIcon />
                  <span>Github Pages</span>
                </Item>

                <Item>
                  <ChromeIcon />
                  <span>Chrome DevTools</span>
                </Item>
              </IconsGrid>

              <h1>Who?</h1>
              <p>
                My name is Pedro Klepa, an electrical engineer by degree and a
                web developer by passion. I make a bunch of different fun-sized
                projects like this one as part of my journey in learning modern
                tools and techniques in web-development.
              </p>

              <h1>Extras</h1>
              <p>
                Special thanks to both{" "}
                <a
                  href="https://www.theodinproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TheOdinProject
                </a>{" "}
                for its great curriculum guided me throughout my learning and{" "}
                <a
                  href="https://github.com/guilhermerodz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guilherme Rodz
                </a>{" "}
                , from RocketSeat, whose work in{" "}
                <a
                  href="https://www.youtube.com/watch?v=x4FdZd2-_uU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this tutorial
                </a>{" "}
                served as the foundation of the work here displayed.
              </p>
            </Content>

            <Footer>
              <Button onClick={closeModal} isCancel>
                Close
              </Button>
              <Button
                onClick={() => {
                  window.open(
                    "https://github.com/pklepa/discord-clone",
                    "_blank"
                  );
                }}
              >
                See Source Code
              </Button>
            </Footer>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default AboutModal;
