import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import React from "react";

type DisabledButtonProps = {
  text?: string;
  disabled?: boolean;
} & Pick<PressableProps, "onPress" | "testOnly_pressed" | "testID">;

const pickBackgroundColor = (pressed: boolean, disabled?: boolean) => {
  if (disabled) {
    return styles.disabledBackground;
  }

  return pressed ? styles.pressedBackground : styles.defaultBackground;
};

export default function PressableButton({
  disabled,
  text,
  testOnly_pressed,
  testID,
  onPress,
}: DisabledButtonProps) {
  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={text}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        ...pickBackgroundColor(pressed, disabled),
      })}
      testOnly_pressed={testOnly_pressed}
      testID={testID}
    >
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "tomato",
    borderRadius: 8,
    alignItems: "center",
  },
  disabledBackground: {
    backgroundColor: "#aa422f",
  },
  pressedBackground: {
    backgroundColor: "red",
  },
  defaultBackground: {
    backgroundColor: "tomato",
  },
});
