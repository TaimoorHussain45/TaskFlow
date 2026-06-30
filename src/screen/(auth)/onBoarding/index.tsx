import Box from "@/src/component/Box";
import Button from "@/src/component/Button";
import Typography from "@/src/component/Typography";
import { AppTheme } from "@/src/constant/colors";
import { onBoardingData } from "@/src/constant/Data";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOnBoardingStyle } from "./style";

const OnBoarding = () => {
  const theme = useTheme<AppTheme>();
  const styles = useOnBoardingStyle(theme);
  const pagerRef = useRef<PagerView>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const isLastPage = currentPage === onBoardingData.length - 1;

  const handleSkipButton = () => {
    router.replace("/../screen/login/index");
  };
  const onContinuePress = () => {
    if (isLastPage) {
      router.replace("/../screen/(auth)/login/index");
      return;
    }
    pagerRef.current?.setPage(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleSkipButton}>
          <Typography color={theme.colors.darkBlack}>Skip</Typography>
        </TouchableOpacity>
      </View>

      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(event) => {
          console.log("selected page", event.nativeEvent.position);
          setCurrentPage(event.nativeEvent.position);
        }}
      >
        {onBoardingData.map((element, index) => (
          <View key={index + 1}>
            <View style={styles.imageContainer}>
              <Box
                backgroundColor={element.shapes[index]}
                width={170}
                height={170}
                borderRadius={75}
                opacity={0.5}
              />
              <View
                style={[
                  styles.icon,
                  { backgroundColor: element.shapes[index] },
                ]}
              >
                <Ionicons
                  name={element.icon}
                  size={48}
                  color={theme.colors.offWhite}
                  style={styles.image}
                />
              </View>
              <Box
                backgroundColor={element.shapes[index]}
                width={70}
                height={70}
                borderRadius={75}
                position="absolute"
                top={8}
                left={25}
                opacity={0.5}
              />
              <Box
                width={90}
                height={90}
                backgroundColor={element.shapes[index]}
                borderRadius={25}
                position="absolute"
                absolute={{ top: 50, left: 40 }}
                opacity={0.5}
                transform={[{ rotate: "45deg" }]}
              />
            </View>
            <View style={styles.footer}>
              <Typography
                color={theme.colors.text}
                paddingVertical={10}
                variant="h4"
                align="center"
              >
                {element.title}
              </Typography>
              <Typography
                align="center"
                variant="body1"
                paddingVertical={10}
                color={theme.colors.mutedForeground}
              >
                {element.subtitle}
              </Typography>
            </View>
          </View>
        ))}
      </PagerView>

      <Button
        title={isLastPage ? "GetStarted" : "Next"}
        onPress={onContinuePress}
        containerStyle={styles.FooterButton}
        rightIcon={<ChevronRight size={20} color={theme.colors.offWhite} />}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
