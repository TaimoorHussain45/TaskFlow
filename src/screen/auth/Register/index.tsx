import AuthPasswordInput from "@/src/component/Auth/AuthPassword";
import AuthTextInput from "@/src/component/Auth/AuthTextInput";

import Button from "@/src/component/ui/Button";
import Typography from "@/src/component/ui/Typography";
import { AppTheme } from "@/src/constant/colors";
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <View style={styles.screen}>
      <View style={styles.arrowBack}>
        <Ionicons name="arrow-back" size={20} color={theme.colors.text} />
      </View>
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
              // onChangeText={(text: string) => setFormData(text)}
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
              // onChangeText={setEmail}
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
              secureTextEntry
            />
          </View>
          <Button
            title="Create Account"
            titleColor={theme.colors.offWhite}
            containerStyle={styles.signUpButton}
          />

          <View style={styles.signInRow}>
            <Typography color={theme.colors.gray} variant="body2">
              Already have an account?
            </Typography>
            <TouchableOpacity>
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
