import AuthPasswordInput from "@/src/component/Auth/AuthPassword";
import AuthTextInput from "@/src/component/Auth/AuthTextInput";

import BackButton from "@/src/component/ui/BackButton";
import Button from "@/src/component/ui/Button";
import Typography from "@/src/component/ui/Typography";
import { AppTheme } from "@/src/constant/colors";
import { authServices } from "@/src/services/auth";
import { doPasswordsMatch, isEmpty, isValidEmail } from "@/src/utlis/validator";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRegisterStyle } from "./style";

interface formValidationProps {
  email: string;
  password: string;
}
const Register = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme<AppTheme>();
  const styles = useRegisterStyle(theme, insets);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "Test",
    email: "cohovi3305@duvips.com",
    password: "12345678",
    confirmPassword: "12345678",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const onSignIn = () => {
    console.log("working 1");
    router.replace("/(auth)/login");
    console.log("working 2");
  };
  const handleChange = (
    field: keyof typeof formData,
    text: string,
    errorField: keyof typeof errors,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: text }));

    if (text.trim()) {
      setErrors((prev) => ({ ...prev, [errorField]: "" }));
    }
  };
  const validate = () => {
    const newNameError = isEmpty(formData.name) ? "Please enter your name" : "";
    const newEmailError = isEmpty(formData.email)
      ? "Please enter your email"
      : !isValidEmail(formData.email)
        ? "Please enter a valid email"
        : "";

    const newPasswordError = isEmpty(formData.password)
      ? "Please enter your password"
      : "";
    const newConfirmPasswordError = isEmpty(formData.confirmPassword)
      ? "Please enter your password"
      : !doPasswordsMatch(formData.password, formData.confirmPassword)
        ? "Password does not match"
        : "";
    setErrors({
      nameError: newNameError,
      emailError: newEmailError,
      passwordError: newPasswordError,
      confirmPasswordError: newConfirmPasswordError,
    });
    return Object.values(errors).every((msg) => msg === "");
  };
  const handleBackPress = () => router.replace("/(auth)/login");
  const onSignUp = async () => {
    if (!validate()) return;
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    try {
      const res = await authServices.signUp(payload);
      console.log("Data", res);
      router.replace("/(auth)/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.screen}>
      <BackButton onPress={handleBackPress} />
      <View style={styles.headerContent}>
        <Typography color={theme.colors.text} variant="h3" align="left">
          Create Account
        </Typography>
        <Typography variant="caption" align="left" color={theme.colors.gray}>
          join thousand of teams using TaskFlow
        </Typography>
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
          <View style={styles.profileContainer}>
            <View style={styles.imageContainer}>
              <Typography align="center" color={theme.colors.offWhite}>
                name
              </Typography>
            </View>
            <TouchableOpacity style={styles.camera}>
              <Ionicons
                name="camera-outline"
                color={theme.colors.offWhite}
                size={15}
              />
            </TouchableOpacity>

            <View>
              <Typography color={theme.colors.text} variant="h4" align="left">
                Profile photo
              </Typography>
              <Typography
                variant="caption"
                align="left"
                color={theme.colors.gray}
              >
                Upload a photo or use your initials
              </Typography>
              <Typography variant="h4" align="left" color={theme.colors.tint}>
                Upload a photo
              </Typography>
            </View>
          </View>

          <View style={styles.formFields}>
            <AuthTextInput
              placeholder="Enter your Name"
              placeholderTextColor={theme.colors.gray}
              // placeholderTextColor={theme.colors.tint}
              iconLeft="mail-outline"
              label="Name"
              labelColor={theme.colors.text}
              iconLeftColor={theme.colors.gray}
              borderColor={theme.colors.border}
              backgroundColor={theme.colors.background}
              borderWidth={2}
              value={formData.name}
              onChangeText={(text: string) =>
                handleChange("name", text, "nameError")
              }
              error={!!errors.nameError}
              errorMessage={errors.nameError}
            />
            <AuthTextInput
              placeholder="ahmad@example.com"
              // placeholderTextColor={theme.colors.tint}
              iconLeft="mail-outline"
              label="Email address"
              labelColor={theme.colors.text}
              iconLeftColor={theme.colors.gray}
              borderColor={theme.colors.border}
              backgroundColor={theme.colors.background}
              borderWidth={2}
              value={formData.email}
              onChangeText={(text: string) =>
                handleChange("email", text, "emailError")
              }
              error={!!errors.emailError}
              errorMessage={errors.emailError}
            />

            <AuthPasswordInput
              placeholder="Enter your password"
              iconLeft="lock-closed-outline"
              label="Password"
              labelColor={theme.colors.text}
              iconLeftColor={theme.colors.gray}
              iconRightColor={theme.colors.gray}
              value={formData.password}
              backgroundColor={theme.colors.background}
              borderColor={theme.colors.border}
              secureTextEntry
              onChangeText={(text: string) =>
                handleChange("password", text, "passwordError")
              }
              error={!!errors.passwordError}
              errorMessage={errors.passwordError}
            />
            <AuthPasswordInput
              placeholder="confirm password"
              iconLeft="lock-closed-outline"
              label="Confirm password"
              labelColor={theme.colors.text}
              iconRightColor={theme.colors.gray}
              iconLeftColor={theme.colors.gray}
              value={formData.confirmPassword}
              backgroundColor={theme.colors.background}
              borderColor={theme.colors.border}
              onChangeText={(text: string) =>
                handleChange("confirmPassword", text, "confirmPasswordError")
              }
              secureTextEntry
              error={!!errors.confirmPasswordError}
              errorMessage={errors.confirmPasswordError}
            />
          </View>
          <Button
            title="Create Account"
            titleColor={theme.colors.offWhite}
            containerStyle={styles.signUpButton}
            onPress={onSignUp}
          />

          <View style={styles.signInRow}>
            <Typography color={theme.colors.gray} variant="body2">
              Already have an account?
            </Typography>
            <TouchableOpacity onPress={onSignIn}>
              <Typography color={theme.colors.primary} variant="h4">
                Sign in
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
