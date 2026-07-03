import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";
import { AppTheme } from "../../constant/colors";

interface AuthTextInputProps extends TextInputProps {
  placeholder: string;
  label?: string;
  labelColor?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconLeftSize?: number;
  iconLeftColor?: string;
  iconLeftStyle?: StyleProp<TextStyle>;
  iconRight?: keyof typeof Ionicons.glyphMap;
  iconRightSize?: number;
  iconRightColor?: string;
  iconRightStyle?: StyleProp<TextStyle>;
  onIconRightPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  borderWidth?: number;
  onChangeText?: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  errorColor?: string;
}

export default function AuthTextInput({
  placeholder,
  label,
  labelColor = "#374151",
  color = "#6C63FF",
  borderColor = "#D1D5DB",
  backgroundColor,
  iconLeft,
  iconLeftSize = 20,
  iconLeftColor,
  iconLeftStyle,
  borderWidth = 1,
  iconRight,
  iconRightSize = 20,
  iconRightColor,
  iconRightStyle,
  onIconRightPress,
  containerStyle,
  value,
  onChangeText,
  error = false,
  errorMessage,
  errorColor = "#EF4444",
  ...rest
}: AuthTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme<AppTheme>();

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}

      <View
        style={[
          styles.container,
          {
            borderColor: isFocused ? color : borderColor,
            backgroundColor: isFocused
              ? theme.colors.primaryDim
              : backgroundColor,
            borderWidth: borderWidth,
          },
          containerStyle,
        ]}
      >
        {iconLeft && (
          <Ionicons
            name={iconLeft}
            size={iconLeftSize}
            color={error ? errorColor : (iconLeftColor ?? color)}
            style={[styles.iconLeft, iconLeftStyle]}
          />
        )}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray}
          style={[styles.input, { color: theme.colors.text }]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {iconRight && (
          <Ionicons
            name={iconRight}
            size={iconRightSize}
            color={error ? errorColor : (iconRightColor ?? color)}
            style={[styles.iconRight, iconRightStyle]}
            onPress={onIconRightPress}
            suppressHighlighting
          />
        )}
      </View>

      {error && (
        <Text style={[styles.errorText, { color: theme.colors.danger }]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 60,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 15,
    // color: "#111827",

    paddingVertical: 0,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
