import { Pressable, Text } from "react-native";
import React from "react";

import Screen from "@/__lib__/Screen";
import useAsyncCounter from "../hooks/useAsyncCounter";

export default function AsyncReactState() {
  const { counter, increment, decrement } = useAsyncCounter();

  return (
    <Screen scrollable>
      <Text>{counter}</Text>

      <Pressable
        accessible
        accessibilityRole="button"
        accessibilityLabel="increment"
        onPress={increment}
      >
        <Text>Increment +1</Text>
      </Pressable>

      <Pressable
        accessible
        accessibilityRole="button"
        accessibilityLabel="decrement"
        onPress={decrement}
      >
        <Text>Decrement -1</Text>
      </Pressable>
    </Screen>
  );
}
