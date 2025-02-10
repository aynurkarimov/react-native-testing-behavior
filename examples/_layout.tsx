import { Stack } from "expo-router";

import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#FFF" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Index" }}
        />
        <Stack.Screen
          name="animations/index"
          options={{ title: "Animations" }}
        />
        <Stack.Screen
          name="components/index"
          options={{ title: "Components" }}
        />
        <Stack.Screen name="contexts" options={{ title: "Contexts" }} />
        <Stack.Screen name="core/index" options={{ title: "Core" }} />
        <Stack.Screen name="hooks/index" options={{ title: "Hooks" }} />
        <Stack.Screen name="lists/index" options={{ title: "Lists" }} />
        <Stack.Screen name="screens/index" options={{ title: "Screens" }} />
        <Stack.Screen name="states/index" options={{ title: "States" }} />
      </Stack>
    </PaperProvider>
  );
}
