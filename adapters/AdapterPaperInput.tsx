import React from "react";
import { TextInput as PaperInput } from "react-native-paper";
import { type LibraryBasedInputProps } from "@/examples/components/LibraryBasedInput";
import { StyleSheet } from "react-native";

export default function AdapterPaperInput({
  value,
  placeholder,
  mode,
  onChangeText,
  testID,
}: LibraryBasedInputProps) {
  return (
    <PaperInput // <- Third party
      value={value}
      mode={mode}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.container}
      contentStyle={styles.container}
      testID={testID}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
  },
});
