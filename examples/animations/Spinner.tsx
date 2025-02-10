/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// https://docs.swmansion.com/react-native-reanimated/docs/guides/testing/
export default function Spinner() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 1000 }), -1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Reanimated.View
      accessible
      accessibilityRole="progressbar"
      style={[
        styles.loader,
        useAnimatedStyle(() => ({
          transform: [{ rotate: `${rotation.value}deg` }],
        })),
      ]}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: "#ff6347",
    borderTopColor: "transparent",
    borderRadius: 25,
  },
});
