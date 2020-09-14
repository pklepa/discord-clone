import React, { useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";

function App() {
  const [isUserLoggedIn, setIsUserSignedIn] = useState(false);

  return (
    <>
      <GlobalStyles />

      {isUserLoggedIn ? (
        <Layout />
      ) : (
        <LoginPage setIsUserSignedIn={setIsUserSignedIn} />
      )}
    </>
  );
}

export default App;
