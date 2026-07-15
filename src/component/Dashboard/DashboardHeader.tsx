import { AppTheme } from "@/src/constant/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import Typography from "../ui/Typography";
import { useDashboardStyle } from "./style";

export default function DashboardHeader() {
  const theme = useTheme<AppTheme>();
  const styles = useDashboardStyle(theme);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Typography variant="body2" color={theme.colors.mutedForeground}>
          Good afternoon,
        </Typography>
        <View style={styles.rightContent}>
          <Typography variant="h2">Ahmad</Typography>
          <Typography variant="h1">👋</Typography>
        </View>
      </View>
      <View style={styles.bellIcon}>
        <Ionicons
          name="notifications-outline"
          size={30}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
}
