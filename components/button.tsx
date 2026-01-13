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
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default Button;
