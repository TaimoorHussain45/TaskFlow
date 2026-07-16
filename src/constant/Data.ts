import { IconType } from "../types/icon";
import { AppTheme } from "./colors";

interface ProgressDataType {
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
export const onBoardingData = [
  {
    title: "Organize with\nKanban boards",
    subtitle:
      "Visualize your workflow with intuitive drag-and-drop boards. Move tasks through stages effortlessly.",
    icon: "grid" as const,
    color: "#6366f1",
    shapes: ["#818cf8", "#a5b4fc", "#6366f1"],
  },
  {
    title: "Collaborate\nin real time",
    subtitle:
      "Invite your team, assign tasks, leave comments, and stay in sync. Work flows better together.",
    icon: "people" as const,
    color: "#22c55e",
    shapes: ["#4ade80", "#86efac", "#22c55e"],
  },
  {
    title: "Track progress\neffortlessly",
    subtitle:
      "Beautiful dashboards, stats, and timelines give you a bird's-eye view of every project.",
    icon: "analytics" as const,
    color: "#f59e0b",
    shapes: ["#fbbf24", "#fcd34d", "#f59e0b"],
  },
];
export const getProgressData = (theme: AppTheme): ProgressDataType[] => [
  {
    icon: { family: "MaterialCommunityIcons", name: "clipboard-text-outline" },
    quantity: "36",
    title: "Total Tasks",
    trendingIcon: { family: "Ionicons", name: "trending-up-outline" },
    trendingPercent: "+12%",
    iconColor: theme.colors.primary,
    trendingIconColor: theme.colors.primary,
    backGroundColor: theme.colors.border,
    trendingPercentColor: theme.colors.primary,
  },
  {
    icon: { family: "Ionicons", name: "time-outline" },
    quantity: "8",
    title: "In Progress",
    trendingIcon: { family: "Ionicons", name: "trending-up-outline" },
    trendingPercent: "+3%",
    iconColor: theme.colors.warning,
    trendingIconColor: theme.colors.warning,
    backGroundColor: theme.colors.charcoal,
    trendingPercentColor: theme.colors.warning,
  },
  {
    icon: { family: "Ionicons", name: "checkmark-circle-outline" },
    quantity: "24",
    title: "Completed",
    trendingIcon: { family: "Ionicons", name: "trending-up-outline" },
    trendingPercent: "+12%",
    iconColor: theme.colors.success,
    trendingIconColor: theme.colors.success,
    backGroundColor: theme.colors.accent,
    trendingPercentColor: theme.colors.success,
  },
  {
    icon: { family: "AntDesign", name: "warning" },
    quantity: "4",
    title: "Overdue",
    trendingIcon: { family: "Ionicons", name: "trending-down-outline" },
    trendingPercent: "+3%",
    iconColor: theme.colors.success,
    trendingIconColor: theme.colors.success,
    backGroundColor: theme.colors.errorContainer,
    trendingPercentColor: theme.colors.success,
  },
];
