import React from "react";

import Presenter from "@/__lib__/Presenter";
import Screen from "@/__lib__/Screen";

import Spinner from "./Spinner";

export default function Animations() {
  return (
    <Screen scrollable>
      <Presenter label="Spinner" path="animations/Spinner">
        <Spinner />
      </Presenter>
    </Screen>
  );
}
