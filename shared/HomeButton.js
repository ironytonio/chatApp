import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const HomeButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeButton;
