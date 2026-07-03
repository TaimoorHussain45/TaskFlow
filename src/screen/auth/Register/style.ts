import { AppTheme } from "@/src/constant/colors";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useRegisterStyle = (theme: AppTheme, insets: any) => {
  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          padding: 20,
          backgroundColor: theme.colors.secondary,
        },
        arrowBack: {
          width: 36,
          height: 36,
          borderRadius: 7,
          borderWidth: 1,
          borderColor: theme.colors.text,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          marginTop: 15,
          opacity: 0.7,
          backgroundColor: theme.colors.primaryForeground,
        },
        headerContent: {
          marginVertical: 10,
        },
        scrollContainer: {
          flex: 1,
          // paddingBottom: 20,
        },
        imageContainer: {
          width: 70,
          height: 70,
          borderRadius: 5,
          backgroundColor: theme.colors.primary,
          justifyContent: "center",
          alignItems: "center",
        },
        camera: {
          width: 25,
          height: 20,
          backgroundColor: theme.colors.primary,
          position: "absolute",
          left: 50,
          bottom: -7,
          borderColor: theme.colors.secondary,
          borderWidth: 2,
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
        },
        scrollContent: {
          flexGrow: 1,
          // paddingVertical: 20,
          paddingBottom: insets.bottom + 20,
        },
        signUpButton: {
          marginVertical: 10,
          width: "100%",
          textAlign: "center",
        },
        formFields: {
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 20,
          marginVertical: 10,
        },
        profileContainer: {
          flexDirection: "row",
          gap: 20,
        },
        signInRow: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 4,
          marginTop: 20,
        },
      }),

    [theme, insets],
  );
};
