import React from "react";

import ExplorationOption from "@/__lib__/ExplorationOption";
import Screen from "@/__lib__/Screen";

export default function Screens() {
  return (
    <Screen scrollable>
      <ExplorationOption
        text="Network Request"
        path="./screens/NetworkRequest"
      />
    </Screen>
  );
}
