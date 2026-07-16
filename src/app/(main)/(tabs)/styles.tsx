import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
export const useTabBarStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          backgroundColor: theme.colors.tabBar,
        },
        tabBarContainer: {
          backgroundColor: "#0F1229",
        },
      }),

    [theme],
  );
};
export const useHomeStyle = (theme: AppTheme, insets: EdgeInsets) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,

          marginTop: 30,
          //   paddingBottom: insets.bottom + 20,
          backgroundColor: theme.colors.secondary,
        },
        progressCard: {
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginVertical: 20,
          gap: 10,
          marginHorizontal: 5,
        },
      }),

    [theme],
  );
};
