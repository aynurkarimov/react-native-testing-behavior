import {
  ActivityIndicator,
  SectionList as RNSectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import a11y from "@/adapters/a11y";
import groupPetsByType from "./groupPetsByType";

export type SectionedPets = {
  title: string;
  data: Pet[];
};

export type AsyncSectionListProps = {
  injectedData: Pet[];
  testID?: string;
};

export default function AsyncSectionList({
  injectedData,
  testID,
}: AsyncSectionListProps) {
  const [sectionedPets, setSectionedPets] = useState<SectionedPets[]>([]);

  // Emulating network request...
  useEffect(() => {
    (async () => {
      await new Promise<Pet[]>((resolve) => {
        setTimeout(() => {
          resolve(injectedData);
        }, 1000);
      }).then((unsortedPets) => {
        setSectionedPets(groupPetsByType(unsortedPets));
        a11y.announce("Loading is complete!");
      });
    })();
  }, [injectedData]);

  return (
    <RNSectionList
      sections={sectionedPets}
      accessible
      accessibilityRole="list"
      ListHeaderComponent={
        <Text style={styles.title}>Pets in our neighborhood</Text>
      }
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      renderItem={({ item: { id, name, age }, section: { title: type } }) => (
        <View
          style={{
            ...styles.pet,
            backgroundColor: type === "Dogs" ? "#7692FF" : "#CA907E",
          }}
          testID={`pet-${id}-${type}`}
        >
          <Text>{name}</Text>
          <Text>{age}</Text>
        </View>
      )}
      ListEmptyComponent={
        <ActivityIndicator
          accessible
          accessibilityRole="progressbar"
          accessibilityState={{ busy: !sectionedPets.length }}
          size="large"
        />
      }
      contentContainerStyle={styles.listContent}
      stickySectionHeadersEnabled={false}
      testID={testID}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 18,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  listContent: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 8,
  },
  pet: {
    borderRadius: 4,
    flexDirection: "row",
    gap: 8,
    padding: 8,
    alignSelf: "flex-start",
  },
});
