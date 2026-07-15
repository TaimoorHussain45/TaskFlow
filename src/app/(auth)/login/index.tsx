import AuthPasswordInput from "@/src/component/Auth/AuthPassword";
import AuthTextInput from "@/src/component/Auth/AuthTextInput";
import Button from "@/src/component/ui/Button";
import Typography from "@/src/component/ui/Typography";
import { AppTheme } from "@/src/constant/colors";
import { isEmpty, isValidEmail } from "@/src/utlis/validator";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "react-native-paper";
import { useLoginStyle } from "./style";

interface formValidationProps {
  email: string;
  password: string;
}
const Login = () => {
  const theme = useTheme<AppTheme>();
  const styles = useLoginStyle(theme);
  const router = useRouter();
  const [email, setEmail] = useState("testing12@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });

  const validate = () => {
    const newEmailError = isEmpty(email)
      ? "Please enter your email"
      : !isValidEmail(email)
        ? "Please enter a valid email"
        : "";

    const newPasswordError = isEmpty(password)
      ? "Please enter your password"
      : "";
    setErrors({
      emailError: newEmailError,
      passwordError: newPasswordError,
    });

    return !newEmailError && !newPasswordError;
  };
  const handleLogin = async () => {
    // if (!validate()) return;
    // const payload = {
    //   email: email,
    //   password: password,
    // };
    try {
      // const res = await authServices.signIn(payload);
      // console.log("Data in sign in", res);
      router.replace("/(main)/(tabs)/home");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleGoogleLogin = () => {
  //   // Handle Google login logic here
  // };
  // const handleAppleLogin = () => {
  //   // Handle Apple login logic here
  // };
  const handleForgotPassword = () => {
    router.replace("/forgotpassword");
  };
  const handleSignUp = () => {
    router.replace("/register");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.heroSection}>
        <View style={styles.logoBadge}>
          <Ionicons name="layers" size={30} color={theme.colors.offWhite} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Typography color={theme.colors.offWhite} align="center">
            Welcome back
          </Typography>
          <Typography variant="body2" color={theme.colors.softViolet}>
            Sign in to your TaskFlow account
          </Typography>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.socialButtonsRow}>
            <Button
              title="Google"
              leftIcon="logo-google"
              leftIconSize={20}
              leftIconColor={theme.colors.primary}
              containerStyle={styles.googleButton}
              titleColor={theme.colors.text}
            />
            <Button
              title="Apple"
              leftIcon="logo-apple"
              leftIconSize={20}
              leftIconColor="red"
              containerStyle={styles.appleButton}
              titleColor={theme.colors.offWhite}
            />
          </View>
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Typography color={theme.colors.softViolet} variant="body2">
              or continue with email
            </Typography>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.formFields}>
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
                if (text.trim())
                  setErrors((prev) => ({ ...prev, emailError: "" }));
              }}
              error={!!errors.emailError}
              errorMessage={errors.emailError}
            />

            <AuthPasswordInput
              placeholder="Enter your password"
              iconLeft="lock-closed-outline"
              label="Password"
              value={password}
              backgroundColor={theme.colors.background}
              borderColor={theme.colors.border}
              onChangeText={(text) => {
                setPassword(text);
                if (text.trim())
                  setErrors((prev) => ({ ...prev, passwordError: "" }));
              }}
              secureTextEntry
              error={!!errors.passwordError}
              errorMessage={errors.passwordError}
            />
          </View>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Typography
              align="right"
              paddingVertical={10}
              color={theme.colors.tint}
              variant="h4"
            >
              Forgot password ?
            </Typography>
          </TouchableOpacity>

          <Button
            title="Sign in to TaskFlow"
            containerStyle={styles.loginButton}
            titleColor={theme.colors.offWhite}
            onPress={handleLogin}
          />
          <View style={styles.signupRow}>
            <Typography color={theme.colors.softIndigo} variant="body2">
              Don't have an account?
            </Typography>
            <TouchableOpacity onPress={handleSignUp}>
              <Typography color={theme.colors.primary} variant="h4">
                Sign up free
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
