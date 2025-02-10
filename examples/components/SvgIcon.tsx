import { StyleSheet, View, ViewProps } from "react-native";

import { IconDownload } from "@/assets";

// https://github.com/kristerkari/react-native-svg-transformer?tab=readme-ov-file#usage-with-jest
export default function SvgIcon({ testID }: ViewProps) {
  return (
    <View style={styles.container} testID={testID}>
      <IconDownload width={24} height={24} testID="iconDownload" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#31E981",
    borderRadius: 12,
    padding: 6,
  },
});
