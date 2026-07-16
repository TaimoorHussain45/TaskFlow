import { IconType } from "@/src/types/icon";
import {
    AntDesign,
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
export interface AppIconProps {
  icon: IconType;
  size?: number;
  color?: string;
}
const AppIcon: React.FC<AppIconProps> = ({ icon, size = 24, color }) => {
  switch (icon.family) {
    case "Ionicons":
      return <Ionicons name={icon.name} size={size} color={color} />;
    case "MaterialIcons":
      return <MaterialIcons name={icon.name} size={size} color={color} />;
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons name={icon.name} size={size} color={color} />
      );
    case "Feather":
      return <Feather name={icon.name} size={size} color={color} />;
    case "AntDesign":
      return <AntDesign name={icon.name} size={size} color={color} />;
  }
};

export default AppIcon;
