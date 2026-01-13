import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const LoginInput = ({ title }: { title: string }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={title}
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1, removed to fix spacing issues in parent
    width: "100%",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 100,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#111",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
  },
});
