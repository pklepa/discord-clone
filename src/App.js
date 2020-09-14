import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <GlobalStyles />

      <LoginPage />
      <Layout />
    </>
  );
}

export default App;
