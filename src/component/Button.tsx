import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";
import { AppTheme } from "../constant/colors";
import Typography from "./Typography";
import { useCustomButtonStyle } from "./styles";

type Variant = "contained" | "outlined" | "text";
type Size = "small" | "medium" | "large";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
  rightIcon,
  ...props
}: ButtonProps) => {
  const theme = useTheme<AppTheme>();
  const styles = useCustomButtonStyle(theme);
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.text} />
      ) : (
        leftIcon && <View>{leftIcon}</View>
      )}
      <Typography variant="body1" color={theme.colors.offWhite}>
        {title}
      </Typography>
      {!loading && rightIcon && <View>{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
