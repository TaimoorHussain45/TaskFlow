import { AppTheme } from "@/src/constant/colors";
import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";

export default function AuthLayout() {
  const theme = useTheme<AppTheme>();

  return (
    <Stack
      initialRouteName="onboarding"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.card },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="forgotpassword" options={{ headerShown: false }} />
    </Stack>
  );
}
