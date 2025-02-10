import ExplorationOption from "@/__lib__/ExplorationOption";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ExplorationOption text="Animations" path="/animations" />
      <ExplorationOption text="Components" path="/components" />
      <ExplorationOption text="Contexts" path="/contexts" />
      <ExplorationOption text="Hooks" path="/hooks" />
      <ExplorationOption text="Lists" path="/lists" />
      <ExplorationOption text="Screens" path="/screens" />
      <ExplorationOption text="States" path="/states" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 12,
    marginHorizontal: 32,
  },
});
