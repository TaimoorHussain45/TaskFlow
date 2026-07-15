import AuthTextInput from "@/src/component/Auth/AuthTextInput";
import BackButton from "@/src/component/ui/BackButton";
import Button from "@/src/component/ui/Button";
import Typography from "@/src/component/ui/Typography";
import { AppTheme } from "@/src/constant/colors";
import { IMAGES } from "@/src/constant/images";
import { isEmpty, isValidEmail } from "@/src/utlis/validator";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useForgotPasswordStyle } from "./style";

const ForgotPassword = () => {
  const router = useRouter();
  const theme = useTheme<AppTheme>();
  const { dark: isDark } = useTheme();
  const styles = useForgotPasswordStyle(theme);
  const [email, setEmail] = useState("");
  const [error, setErrors] = useState("");
  const onResetPassword = () => {
    const newError = isEmpty(email)
      ? "*Please enter your email"
      : !isValidEmail(email)
        ? "* Please enter a valid email"
        : "";

    setErrors(newError);
    if (newError) return;
  };
  const handleSignIn = () => {
    router.replace("/(auth)/login");
  };
  const handleBackPress = () => router.replace("/(auth)/login");

  return (
    <View style={styles.screen}>
      <BackButton onPress={handleBackPress} />
      <View style={styles.logoContainer}>
        <Image
          source={
            isDark
              ? IMAGES.ResetPasswordDarkLogo
              : IMAGES.ResetPasswordLightLogo
          }
          style={styles.image}
        />
      </View>
      <View style={styles.heroSection}>
        <Typography color={theme.colors.text} variant="h3" align="center">
          Forgot password?
        </Typography>
        <Typography
          color={theme.colors.mutedForeground}
          variant="body2"
          align="center"
        >
          No worries! Enter your email and we'll send you a link to reset your
          password.
        </Typography>
      </View>
      <View>
        <AuthTextInput
          placeholder="ahmad@example.com"
          placeholderTextColor={theme.colors.tint}
          iconLeft="mail-outline"
          label="Email address"
          labelColor={theme.colors.text}
          borderColor={theme.colors.tint}
          backgroundColor={theme.colors.primaryDim}
          borderWidth={2}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (text.trim()) setErrors("");
          }}
          error={!!error}
          errorMessage={error}
        />
      </View>
      <Button
        title="Send Reset Link"
        containerStyle={styles.passwordBtn}
        titleColor={theme.colors.offWhite}
        onPress={onResetPassword}
      />
      <View style={styles.signInRow}>
        <Typography variant="body2" color={theme.colors.mutedForeground}>
          Back to
        </Typography>
        <TouchableOpacity onPress={handleSignIn}>
          <Typography variant="h4" color={theme.colors.primary}>
            Sign in
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
