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
export const useBackButtonStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        arrowBack: {
          width: 36,
          height: 36,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: theme.colors.text,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          marginTop: 15,
          opacity: 0.7,
          backgroundColor: theme.colors.primaryForeground,
        },
      }),
    [theme],
  );
};
