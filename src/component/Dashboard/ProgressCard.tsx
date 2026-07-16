import { AppTheme } from "@/src/constant/colors";
import { IconType } from "@/src/types/icon";
import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import AppIcon from "../ui/AppIcon";
import Typography from "../ui/Typography";
import { useProgressCardStyle } from "./style";

interface ProgressCardProps {
  icon: IconType;
  quantity: string;
  iconColor: string;
  title: string;
  trendingIcon: IconType;
  trendingIconColor: string;
  trendingPercent: string;
  backGroundColor: string;
  trendingPercentColor: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  icon,
  quantity,
  title,
  trendingIcon,
  trendingIconColor,
  backGroundColor,
  iconColor,
  trendingPercent,
  trendingPercentColor,
}) => {
  const theme = useTheme<AppTheme>();
  const styles = useProgressCardStyle(theme);
  return (
    <View style={styles.screen}>
      <View style={[styles.bellIcon, { backgroundColor: backGroundColor }]}>
        <AppIcon icon={icon} size={24} color={iconColor} />
      </View>
      <View>
        <View style={styles.topContent}>
          <Typography variant="h3" color={theme.colors.text}>
            {quantity}
          </Typography>
          <Typography variant="body2" color={theme.colors.mutedForeground}>
            {title}
          </Typography>

          <View style={styles.content}>
            <AppIcon icon={trendingIcon} size={20} color={trendingIconColor} />
            <Typography color={trendingPercentColor} variant="body1">
              {trendingPercent}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressCard;
