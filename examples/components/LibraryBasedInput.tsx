import { StyleSheet, View } from "react-native";
import React from "react";

import AdapterPaperInput from "@/adapters/AdapterPaperInput";

export type LibraryBasedInputProps = {
  value?: string;
  placeholder?: string;
  mode?: "outlined";
  onChangeText?: (text: string) => void;
  testID?: string;
};

export default function LibraryBasedInput({
  value,
  placeholder,
  mode,
  onChangeText,
  testID,
}: LibraryBasedInputProps) {
  return (
    <View style={styles.container} testID={testID}>
      <AdapterPaperInput
        value={value}
        placeholder={placeholder}
        mode={mode}
        onChangeText={onChangeText}
        testID="adapterPaperInput"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
