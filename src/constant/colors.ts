import {
  MD3Colors,
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
} from "react-native-paper";

export type ThemeColors = typeof MD3Colors & {
  primary: string;
  background: string;
  surface: string;
  card: string;
  cardAlt: string;

  // Text
  text: string;
  textSub: string;
  muted: string;
  mutedLight: string;

  // Border
  border: string;
  borderStrong: string;

  // Status
  success: string;
  warning: string;
  danger: string;
  error: string;

  // Primary
  primaryDim: string;
  primaryStrong: string;

  // Success
  successDim: string;

  warningDim: string;
  primaryForeground: string;
  dangerDim: string;

  blue: string;
  blueDim: string;
  purple: string;
  purpleDim: string;
  pink: string;
  pinkDim: string;
  periwinkleLight: string;
  bg: string;
  inputBg: string;
  overlayBg: string;
  mutedForeground: string;
  statusBar: string;
  tabBar: string;
  secondary: string;
  secondaryForeground: string;
  offWhite: string;
  darkBlack: string;
  cloudBlue: string;
  tint: string;
  foreGround: string;
  cardForeground: string;
  softIndigo: string;
  accentForeground: string;
  destructive: string;
  accent: string;
  errorContainer: string;
  destructiveForeground: string;
  input: string;
  orange: string;
  orangeDim: string;
  softViolet: string;
  gray: string;
  charcoal: string;
};

export type AppTheme = MD3Theme & {
  colors: ThemeColors;
};

export type AppColors = {
  light: ThemeColors;
  dark: ThemeColors;
};

export const commonColors = {
  offWhite: "#FFFFFF",
  darkBlack: "#000000",
  cloudBlue: "#EBEDFA",
  periwinkleLight: "#CACBF9",
  softIndigo: "#7570ED",
  softViolet: "#B1ADFE",
  gray: "#8B96A5",
  cardAlt: "#f8fafc",
  textSub: "#64748b",
  mutedLight: "#e2e8f0",
  borderStrong: "#cbd5e1",
  error: "#ef4444",
  primaryStrong: "#4338ca",
  blue: "#3b82f6",
  blueDim: "#bfdbfe",
  purple: "#8b5cf6",
  purpleDim: "#ddd6fe",
  pink: "#ec4899",
  pinkDim: "#fbcfe8",
  bg: "#f8fafc",
  inputBg: "#f1f5f9",
  overlayBg: "rgba(15, 23, 42, 0.75)",
  statusBar: "#e2e8f0",
  tabBar: "#eef2ff",
  destructiveForeground: "#ffffff",
};

// In your theme constants file
export const colors: AppColors = {
  light: {
    ...MD3Colors,
    ...commonColors,
    text: "#0f172a",
    tint: "#6366f1",
    background: "#f8fafc",
    foreGround: "#0f172a",
    card: "#ffffff",
    charcoal: "#FEF2DE",
    cardForeground: "#0f172a",
    primary: "#6366f1",
    primaryDim: "#eef2ff",
    primaryForeground: "#ffffff",
    secondary: "#f1f5f9",
    secondaryForeground: "#0f172a",
    muted: "#EBEDFA",
    mutedForeground: "#64748b",
    accentForeground: "#6366f1",
    destructive: "#ef4444",
    border: "#E8E9EB",

    input: "#e2e8f0",
    surface: "#000000",
    success: "#22c55e",
    accent: "#E2F7EA",
    successDim: "#dcfce7",
    warning: "#f59e0b",
    warningDim: "#fef3c7",
    danger: "#ef4444",
    dangerDim: "#fee2e2",
    orange: "#f97316",
    orangeDim: "#ffedd5",
    errorContainer: "#FDE6E6",
  },
  dark: {
    ...MD3Colors,
    ...commonColors,
    text: "#f1f5f9",
    tint: "#818cf8",
    charcoal: "#3B3D38",
    background: "#0f172a",
    foreGround: "#f1f5f9",
    card: "#1E293B",
    accent: "#244244",
    cardForeground: "#f1f5f9",
    primary: "#6366f1",
    primaryDim: "#1e1b4b",
    errorContainer: "#3B3342",
    primaryForeground: "#0F172A",
    secondary: "#1e294b",
    secondaryForeground: "#f1f5f9",
    muted: "#1e294b",
    mutedForeground: "#94a3b8",
    accentForeground: "#818cf8",
    destructive: "#ef4444",
    border: "#2E384A",
    input: "#334155",
    surface: "#1e293b",
    success: "#22c55e",
    successDim: "#14532d",
    warning: "#f59e0b",
    warningDim: "#78350f",
    danger: "#ef4444",
    dangerDim: "#7f1d1d",
    orange: "#f97316",
    orangeDim: "#431407",
  },
};

export const lightTheme: AppTheme = {
  ...MD3LightTheme,
  colors: colors.light as any,
};

export const darkTheme: AppTheme = {
  ...MD3DarkTheme,
  colors: colors.dark as any,
};
