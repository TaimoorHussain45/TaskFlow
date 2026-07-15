import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useDashboardStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          backgroundColor: theme.colors.card,
          //   borderRadius: 20,
          borderColor: theme.colors.border,
          borderWidth: 2,
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        },
        container: {
          flexDirection: "column",
          justifyContent: "space-between",
        },
        rightContent: {
          flexDirection: "row",
          gap: 5,
        },
        bellIcon: {
          height: 40,
          width: 40,
          borderRadius: 15,
          backgroundColor: theme.colors.cloudBlue,
          justifyContent: "center",
          alignItems: "center",
        },
      }),
    [theme],
  );
};
