import React from "react";

import Screen from "@/__lib__/Screen";
import ExplorationOption from "@/__lib__/ExplorationOption";

export default function State() {
  return (
    <Screen scrollable>
      <ExplorationOption
        text="AsyncReactState"
        path="/states/AsyncReactState"
      />
    </Screen>
  );
}
