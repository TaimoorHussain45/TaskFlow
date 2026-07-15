import { AppTheme } from "@/src/constant/colors";
import { Fonts } from "@/src/constant/font";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
export const useOnBoardingStyle = (theme: AppTheme) => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.colors.bg,
          padding: 20,
        },
        btnContainer: {
          flexDirection: "row-reverse",
          // marginTop: 50,
        },
        footer: {
          paddingVertical: 10,
        },
        title: {
          fontSize: 18,
          fontFamily: Fonts.semiBold,
        },
        FooterButton: {
          width: "100%",
        },
        imageContainer: {
          height: "60%",
          backgroundColor: theme.colors.cloudBlue,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        },
        image: {},
        gripContainer: {
          backgroundColor: theme.colors.primary,
          width: "30%",
          height: "25%",
        },

        icon: {
          position: "absolute",
          top: 110,
          width: 75,
          height: 75,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        },
      }),
    [theme],
  );
};
