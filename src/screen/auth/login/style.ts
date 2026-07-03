import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useLoginStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          backgroundColor: theme.colors.card,
          paddingTop: 20,
        },
        logoBadge: {
          height: 50,
          width: 50,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.softIndigo,
          borderColor: theme.colors.accentForeground,
          borderWidth: 0.5,
        },
        heroSection: {
          backgroundColor: theme.colors.primary,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        },
        googleButton: {
          backgroundColor: theme.colors.card,
          width: "50%",
          borderColor: theme.colors.softViolet,
          borderWidth: 0.5,
        },
        dividerLine: {
          borderColor: theme.colors.softViolet,
          borderWidth: 0.5,
          width: "20%",
          height: 1,
        },
        dividerRow: {
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginVertical: 20,
        },
        appleButton: {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.softViolet,
          borderWidth: 0.5,
          width: "50%",
        },
        socialButtonsRow: {
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
        },
        scrollContainer: {
          flex: 1,
        },
        scrollContent: {
          flexGrow: 1,
          padding: 10,
        },
        formFields: {
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 20,
        },
        loginButton: {
          width: "100%",
        },
        signupRow: {
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
