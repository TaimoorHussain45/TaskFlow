import React from "react";
import {
    DimensionValue,
    StyleProp,
    View,
    ViewProps,
    ViewStyle,
} from "react-native";

interface BoxProps extends ViewProps {
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  position?: "absolute" | "relative";
  absolute?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  backgroundColor?: string;
  opacity?: number;
  height?: DimensionValue;
  width?: DimensionValue;
  transform?: ViewStyle["transform"];
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Box = ({
  border = false,
  borderColor = "#000",
  borderWidth = 1,
  borderRadius,
  position = "relative",
  absolute,
  backgroundColor,
  opacity,
  height,
  width,
  transform,
  style,
  children,
  ...rest
}: BoxProps) => {
  return (
    <View
      style={[
        {
          position,
          backgroundColor,
          opacity,
          height,
          width,
          borderRadius,
          transform,
          ...(position === "absolute" && absolute),
          ...(border && {
            borderWidth,
            borderColor,
          }),
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default Box;
