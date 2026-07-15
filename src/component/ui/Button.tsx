import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";
import { AppTheme } from "../../constant/colors";
import Typography from "./Typography";
import { useCustomButtonStyle } from "./styles";

type Variant = "contained" | "outlined" | "text";
type Size = "small" | "medium" | "large";
type IconName = keyof typeof Ionicons.glyphMap;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  titleColor?: string;
  leftIcon?: IconName;
  leftIconSize?: number;
  leftIconColor?: string;
  leftIconStyle?: StyleProp<TextStyle>;
  rightIcon?: IconName;
  rightIconSize?: number;
  rightIconColor?: string;
  rightIconStyle?: StyleProp<TextStyle>;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button = ({
  title,
  containerStyle,
  loading,
  leftIcon,
  leftIconSize = 20,
  leftIconColor,
  leftIconStyle,
  rightIcon,
  rightIconSize = 20,
  rightIconColor,
  rightIconStyle,
  titleColor,
  ...props
}: ButtonProps) => {
  const theme = useTheme<AppTheme>();
  const styles = useCustomButtonStyle(theme);

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.text} />
      ) : (
        leftIcon && (
          <Ionicons
            name={leftIcon}
            size={leftIconSize}
            color={leftIconColor ?? theme.colors.offWhite}
            style={leftIconStyle}
          />
        )
      )}

      <Typography variant="body1" color={titleColor}>
        {title}
      </Typography>

      {!loading && rightIcon && (
        <Ionicons
          name={rightIcon}
          size={rightIconSize}
          color={rightIconColor}
          style={rightIconStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
