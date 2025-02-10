import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Screen from "@/__lib__/Screen";
import Presenter from "@/__lib__/Presenter";

export default function Hooks() {
  const { navigate } = useRouter();

  return (
    <Screen scrollable>
      <Presenter label="useAsyncCounter" path="hooks/useAsyncCounter">
        <Pressable onPress={() => navigate("/states/AsyncReactState")}>
          <Text>useAsyncCounter</Text>
        </Pressable>
      </Presenter>

      <Presenter label="useQuery" path="hooks/useQuery">
        <Pressable onPress={() => navigate("/screens/NetworkRequest")}>
          <Text>useQuery</Text>
        </Pressable>
      </Presenter>
    </Screen>
  );
}

const styles = StyleSheet.create({});
