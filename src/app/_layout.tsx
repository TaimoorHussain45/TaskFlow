import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";
import { AppState } from "react-native";
import { PaperProvider } from "react-native-paper";
import { supabase } from "../api/supabaseClient";
import { ThemeProvider, useThemeContext } from "../constant/ThemeContext";
import { darkTheme, lightTheme } from "../constant/colors";
import { queryClient } from "../lib/queryClient";

function RootLayoutContent() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../../assets/Fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../assets/Fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../assets/Fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../../assets/Fonts/Poppins-Bold.ttf"),
  });

  React.useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    return () => subscription.remove();
  }, []);
  const { isDark } = useThemeContext();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
      <Slot />
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RootLayoutContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
