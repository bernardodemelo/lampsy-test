import { View } from "react-native";
import type React from "react";

import { spacing } from "../theme";

type LayoutProviderProps = {
  children: React.ReactNode;
};

export default function LayoutProvider ({ children }: LayoutProviderProps) {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xxxl
      }}
    >
      {children}
    </View>
  );
};
