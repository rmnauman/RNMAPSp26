import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, btnText, bgClr }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgClr ? bgClr : "#4c6baf" }]}
            onPress={onPress} activeOpacity={0.5}>
            <Text style={styles.text}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4c6baf",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default CustomButton;