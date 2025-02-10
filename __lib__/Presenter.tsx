import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";

type PresenterProps = {
  label: string;
  path: string;
} & PropsWithChildren;

export default function Presenter({ label, path, children }: PresenterProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.path}>{"examples/" + path}</Text>

      <View style={styles.presenter}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  presenter: {
    borderColor: "#D8E4FF",
    backgroundColor: "#EBF1FF",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
    marginBottom: 32,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  path: {
    fontSize: 10,
    fontWeight: "300",
    marginBottom: 4,
  },
});
