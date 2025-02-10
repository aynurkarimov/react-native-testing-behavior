import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import PressableButton from "./PressableButton";
import LibraryBasedInput from "./LibraryBasedInput";

type HardcodedResponse = {
  isHardcoded: boolean;
};
export type NestedComponentProps = {
  onSuccess: (response: HardcodedResponse) => void;
};

export default function NestedComponent({ onSuccess }: NestedComponentProps) {
  const [value, setValue] = useState("hello");
  const [loading, setLoading] = useState(false);

  const onSubmitPress = async () => {
    setLoading(true);

    // Emulating network request...
    const response = await new Promise<HardcodedResponse>((resolve) => {
      setTimeout(() => {
        resolve({
          isHardcoded: value === "hello",
        });
      }, 1000);
    });

    onSuccess(response);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <LibraryBasedInput
        value={value}
        onChangeText={setValue}
        mode="outlined"
        testID="libraryBasedInput"
      />

      <PressableButton
        text="An async submit"
        disabled={loading}
        onPress={onSubmitPress}
        testID="submitButton"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
