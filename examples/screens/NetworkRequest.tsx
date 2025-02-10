import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useQuery from "../hooks/useQuery";

export default function NetworkRequest() {
  const { data, loading } = useQuery<User[]>("users");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator
            accessible
            accessibilityRole="progressbar"
            accessibilityState={{ busy: loading }}
            size="large"
          />
        ) : (
          <View>
            {data?.map((user) => (
              <View key={user.id}>
                <Text>{user.name}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
  },
});
