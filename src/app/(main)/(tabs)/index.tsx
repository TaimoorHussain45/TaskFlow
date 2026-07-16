import DashboardHeader from "@/src/component/Dashboard/DashboardHeader";
import ProgressCard from "@/src/component/Dashboard/ProgressCard";
import { AppTheme } from "@/src/constant/colors";
import { getProgressData } from "@/src/constant/Data";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHomeStyle } from "./styles";

export default function HomeScreen() {
  const theme = useTheme<AppTheme>();
  const insets = useSafeAreaInsets();

  const progressData = getProgressData(theme);
  const styles = useHomeStyle(theme, insets);
  return (
    <View style={styles.screen}>
      <DashboardHeader />
      <View style={styles.progressCard}>
        {progressData.map((item, index) => (
          <ProgressCard key={index} {...item} />
        ))}
      </View>
    </View>
  );
}
