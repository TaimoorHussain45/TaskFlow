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
          padding: 20,
          borderRadius: 20,
          shadowColor: theme.colors.primary,
          elevation: 25,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 6,
        },
      }),
    [theme],
  );
};
