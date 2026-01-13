import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import LoginInput from "../../components/LoginInput";

const Login = () => {
  const [fontsLoaded] = useFonts({
    BungeeInline: require("../../assets/Fonts/BungeeInline-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Welcome}>Welcome</Text>
        <Text style={styles.WelcomeMsg}>Login into your mycampus app</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <LoginInput title="Enter your email id here" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.passwordWrapper}>
            <LoginInput title="Enter your password here" />
            <Feather
              name="eye"
              size={24}
              color="white"
              style={styles.eyeIcon}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.forgotPassword}>Forgot your Password?</Text>
        </View>
        <View style={styles.footer}>
          <Button title="Log In" />
          <Text style={styles.signUpText}>
            Need to Create an account?{" "}
            <Text style={styles.SignUp}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    marginBottom: -120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Welcome: {
    color: "#FF00BB",
    fontFamily: "BungeeInline",
    fontSize: 58,
    textAlign: "left",
  },
  WelcomeMsg: {
    fontFamily: "BungeeInline",
    fontSize: 13,
    color: "#000000",
    marginTop: -40,
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "BungeeInline",
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -40,
    zIndex: 1,
  },
  forgotPassword: {
    fontFamily: "BungeeInline",
    color: "#007AFF",
    textAlign: "right",
    marginTop: -10,
    marginBottom: 30,
  },
  footer: {
    marginTop: 0,
    marginBottom: 20,
    alignItems: "center",
  },
  signUpText: {
    fontFamily: "BungeeInline",
    color: "#000",
    marginTop: 20,
  },
  SignUp: {
    color: "#007AFF",
  },
});
