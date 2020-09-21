import React from "react";

import { Container } from "./styles";

function DateRow({ date }) {
  return (
    <Container>
      <hr />
      <span>
        {date.toLocaleDateString("en", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <hr />
    </Container>
  );
}

export default DateRow;
