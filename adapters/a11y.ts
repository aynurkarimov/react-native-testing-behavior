import { AccessibilityInfo } from "react-native";

export default {
  announce: (announcement: string) => {
    AccessibilityInfo.announceForAccessibility(announcement);
  },
};
