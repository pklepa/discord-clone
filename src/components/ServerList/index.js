import React from "react";

import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton selected />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton />
    </Container>
  );
}

export default ServerList;
