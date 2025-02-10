import { Text } from "react-native";
import React, { useContext } from "react";

import Presenter from "@/__lib__/Presenter";
import Screen from "@/__lib__/Screen";

import { ContextWithMethods } from "./ContextWithMethodsProvider";
import PressableButton from "../components/PressableButton";

export default function Contexts() {
  const contextWithMethods = useContext(ContextWithMethods);

  return (
    <Screen scrollable>
      <Presenter
        label="Context with methods"
        path="contexts/ContextWithMethodsProvider"
      >
        {contextWithMethods.user?.id ? (
          <Text>{JSON.stringify(contextWithMethods.user, null, 1)}</Text>
        ) : (
          <Text>Context is empty</Text>
        )}

        <PressableButton
          text="Populate context"
          onPress={() =>
            contextWithMethods.setUserInformation({ id: 1, name: "Bob" })
          }
        />
      </Presenter>
    </Screen>
  );
}
