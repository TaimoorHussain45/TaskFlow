import {
    AntDesign,
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

export type IconType =
  | { family: "Ionicons"; name: React.ComponentProps<typeof Ionicons>["name"] }
  | {
      family: "MaterialIcons";
      name: React.ComponentProps<typeof MaterialIcons>["name"];
    }
  | {
      family: "MaterialCommunityIcons";
      name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    }
  | {
      family: "Feather";
      name: React.ComponentProps<typeof Feather>["name"];
    }
  | {
      family: "AntDesign";
      name: React.ComponentProps<typeof AntDesign>["name"];
    };
