import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useCustomButtonStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-start",
          gap: 10,
          backgroundColor: theme.colors.primary,
          padding: 15,
          borderRadius: 20,
          elevation: 6,
        },
      }),
    [theme],
  );
};
