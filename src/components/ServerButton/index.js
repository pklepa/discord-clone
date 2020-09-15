import React from "react";

import Logo from "../../assets/images/discord.svg";
import { Button } from "./styles";

function ServerButton(props) {
  const { selected, isHome, hasNotifications, mentions } = props;

  return (
    <Button
      className={selected ? "selected" : ""}
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
    </Button>
  );
}

export default ServerButton;
