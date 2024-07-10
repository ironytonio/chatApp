import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      keyboardType={keyboardType}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
    color: "gray",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default InputField;
