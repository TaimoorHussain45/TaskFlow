import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider, useThemeContext } from "../constant/ThemeContext";
import { darkTheme, lightTheme } from "../constant/colors";

function RootLayoutContent() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../../assets/Fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../assets/Fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../assets/Fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../../assets/Fonts/Poppins-Bold.ttf"),
  });

  const { isDark } = useThemeContext();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
