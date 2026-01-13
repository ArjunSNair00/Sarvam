import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const Button = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF00BB",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "#000000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "BungeeInline",
  },
});

export default Button;
