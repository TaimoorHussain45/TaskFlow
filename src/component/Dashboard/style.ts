import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useDashboardStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          marginTop: 20,
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
          height: 50,
          width: 50,
          elevation: 5,
          borderRadius: 15,
          backgroundColor: theme.colors.muted,
          justifyContent: "center",
          alignItems: "center",
        },
      }),
    [theme],
  );
};
export const useProgressCardStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          backgroundColor: theme.colors.card,
          borderRadius: 20,
          borderColor: theme.colors.border,
          borderWidth: 2,
          flexDirection: "column",
          padding: 15,
          elevation: 1.5,
          justifyContent: "space-between",
          width: "48%",
          height: "40%",
        },
        content: {
          // marginTop: 10,
          flexDirection: "row",
          gap: 5,
        },
        topContent: {
          flexDirection: "column",
          marginLeft: 5,
        },

        bellIcon: {
          height: 45,
          width: 45,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        },
      }),
    [theme],
  );
};
