import React from "react";

import Logo from "../../assets/images/discord.svg";
import { Button, AddIcon } from "./styles";

function ServerButton(props) {
  const {
    selected,
    isHome,
    hasNotifications,
    mentions,
    isAddServerBtn,
  } = props;

  return (
    <Button
      className={`${selected ? "selected" : ""} ${
        isAddServerBtn ? "addServer" : ""
      }`}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
    >
      {isHome && (
        <img
          src={Logo}
          alt="Discord logo"
          style={{ maxWidth: "100%", maxHeight: "auto" }}
        />
      )}

      {isAddServerBtn && <AddIcon />}
    </Button>
  );
}

export default ServerButton;
