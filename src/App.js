import React, { useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";

function App() {
  const [isUserLoggedIn, setIsUserSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <>
      <GlobalStyles />

      {isUserLoggedIn && currentUser ? (
        <Layout
          currentUser={currentUser}
          setIsUserSignedIn={setIsUserSignedIn}
        />
      ) : (
        <LoginPage
          setCurrentUser={setCurrentUser}
          setIsUserSignedIn={setIsUserSignedIn}
        />
      )}
    </>
  );
}

export default App;
