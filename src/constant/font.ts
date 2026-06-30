export const Fonts = {
  regular: "PoppinsRegular",
  medium: "PoppinsMedium",
  semiBold: "PoppinsSemiBold",
  bold: "PoppinsBold",
  extraBold: "PoppinsExtraBold",
  light: "PoppinsLight",
  extraLight: "PoppinsExtraLight",
  italic: "PoppinsItalic",
  mediumItalic: "PoppinsMediumItalic",
  semiBoldItalic: "PoppinsSemiBoldItalic",
  boldItalic: "PoppinsBoldItalic",
  extraBoldItalic: "PoppinsExtraBoldItalic",
  lightItalic: "PoppinsLightItalic",
  extraLightItalic: "PoppinsExtraLightItalic",
} as const;

export type FontKey = keyof typeof Fonts;
