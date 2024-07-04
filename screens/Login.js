import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  View,
} from "react-native"; // ви можете використовувати SafeAreaView для адаптації з екраном
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const backImage = require("../assets/catBackground.png");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Login success");
        })
        .catch((err) => Alert.alert("Login error", err.message));
    } else {
      Alert.alert("Login error", "Please enter email and password");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={onHandleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 10,
  },
});

export default Login;
