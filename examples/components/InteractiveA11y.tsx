/* eslint-disable prettier/prettier */
import { Pressable, StyleSheet, Text, View, ViewProps } from "react-native";
import React, { useState } from "react";

type Frequency = "daily" | "weekly" | "monthly";

const renderCheckedBackground = (
  frequency: Frequency,
  checkedFrequency: Frequency
) => {
  if (frequency === checkedFrequency) {
    return styles.checkedOption;
  } else {
    return undefined;
  }
};

export default function InteractiveA11y({ testID }: ViewProps) {
  const [checkedFrequency, setCheckedFrequency] = useState<Frequency>("daily");

  return (
    <View testID={testID}>
      <View style={styles.frequencySelector} accessibilityRole="radiogroup">
        <Pressable
          accessible
          accessibilityRole="radio"
          accessibilityLabel="daily"
          accessibilityState={{ checked: checkedFrequency === "daily" }}
          onPress={() => {
            setCheckedFrequency("daily");
          }}
          style={() => ({
            ...styles.frequencyOption,
            ...renderCheckedBackground("daily", checkedFrequency),
          })}
        >
          <Text style={styles.frequencyText}>Daily</Text>
        </Pressable>

        <Pressable
          accessible
          accessibilityRole="radio"
          accessibilityLabel="weekly"
          accessibilityState={{ checked: checkedFrequency === "weekly" }}
          onPress={() => {
            setCheckedFrequency("weekly");
          }}
          style={() => ({
            ...styles.frequencyOption,
            ...renderCheckedBackground("weekly", checkedFrequency),
          })}
        >
          <Text style={styles.frequencyText}>Weekly</Text>
        </Pressable>

        <Pressable
          accessible
          accessibilityRole="radio"
          accessibilityLabel="monthly"
          accessibilityState={{ checked: checkedFrequency === "monthly" }}
          onPress={() => {
            setCheckedFrequency("monthly");
          }}
          style={() => ({
            ...styles.frequencyOption,
            ...renderCheckedBackground("monthly", checkedFrequency),
          })}
        >
          <Text style={styles.frequencyText}>Monthly</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frequencyText: {
    color: "#FFF",
  },
  frequencySelector: {
    flexDirection: "row",
    padding: 2,
    borderRadius: 10,
    backgroundColor: "#ACADBC",
  },
  frequencyOption: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  checkedOption: {
    backgroundColor: "#FC6DAB",
  },
});
