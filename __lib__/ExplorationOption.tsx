import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Href, useRouter } from "expo-router";

type ExplorationOptionProps = {
  text: string;
  path: Href;
};

export default function ExplorationOption({
  text,
  path,
}: ExplorationOptionProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.navigate(path);
      }}
      style={styles.explorationOption}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  explorationOption: {
    padding: 20,
    backgroundColor: "#C6D2ED",
    borderRadius: 12,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    color: "#000",
  },
});
