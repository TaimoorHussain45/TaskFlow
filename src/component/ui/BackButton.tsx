import { AppTheme } from "@/src/constant/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { useBackButtonStyle } from "./styles";

interface BackButtonProps {
  onPress?: () => void;
}

const BackButton = ({ onPress }: BackButtonProps) => {
  const theme = useTheme<AppTheme>();
  const styles = useBackButtonStyle(theme);
  return (
    <TouchableOpacity style={styles.arrowBack} onPress={onPress}>
      <Ionicons name="arrow-back" size={20} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

export default BackButton;
