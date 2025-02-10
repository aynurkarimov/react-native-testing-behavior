import { Slot } from "expo-router";

import React from "react";
import ContextWithMethodsProvider from "./ContextWithMethodsProvider";

export default function ContextsLayout() {
  return (
    <ContextWithMethodsProvider>
      <Slot />
    </ContextWithMethodsProvider>
  );
}
