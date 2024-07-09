import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

const backImage = require("../assets/catBackground.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      // signInWithEmailAndPassword(auth, email, password)
      //   .then(() => {
      //     console.log("Login success");
      //   })
      //   .catch((err) => Alert.alert("Login error", err.message));
      
      // Temporary skip authentication
      console.log("Login success");
      // navigation.navigate("Home");
      if (navigation) {
        navigation.navigate("Home");
      } else {
        console.warn("Navigation is not available");
      }
    } else {
      console.warn("Email and password are required.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet}>
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.row}
          >
            <Text style={styles.accountText}>Do not have an account?</Text>
            <Text style={styles.linkText}> Create account</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backImage: {
    width: "100%",
    height: "40%",
    resizeMode: "cover",
  },
  whiteSheet: {
    flex: 1,
    backgroundColor: "#fff",
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  form: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  accountText: {
    color: "gray",
    fontSize: 15,
  },
  linkText: {
    color: "blue",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

export default Login;