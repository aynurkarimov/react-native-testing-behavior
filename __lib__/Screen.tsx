import { ScrollView, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type ScreenProps = {
  scrollable?: boolean;
} & SafeAreaViewProps &
  PropsWithChildren;

export default function Screen({
  edges = ["bottom"],
  children,
  scrollable,
}: ScreenProps) {
  if (scrollable) {
    return (
      <SafeAreaView style={styles.container} edges={edges}>
        <ScrollView contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={[styles.container, styles.content]} edges={edges}>
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 32,
    marginHorizontal: 16,
  },
});
