/* eslint-disable prettier/prettier */
import { TextInput, View } from "react-native";
import React from "react";
import { type LibraryBasedInputProps } from "@/examples/components/LibraryBasedInput";

export default function FakedAdapterPaperInput({
  value,
  placeholder,
  mode,
  onChangeText,
  testID,
}: LibraryBasedInputProps) {
  return (
    <View
      style={{
        backgroundColor: mode === "outlined" ? "outlined" : undefined,
      }}
      testID={testID}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        testID="input"
      />
    </View>
  );
}
