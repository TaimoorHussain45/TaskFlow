import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useForgotPasswordStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          backgroundColor: theme.colors.primaryForeground,
          padding: 20,
        },
        passwordBtn: {
          width: "100%",
          marginVertical: 20,
        },
        image: {
          width: 250,
          height: 250,
        },
        logoContainer: {
          width: "100%",
          height: "30%",
          justifyContent: "center",
          alignItems: "center",
        },
        heroSection: {
          marginVertical: 20,
        },
        signInRow: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 4,
          marginTop: 20,
        },
      }),
    [theme],
  );
};
