import React, { useState } from "react";
import { StyleSheet, Text, Image, Alert, View } from "react-native";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
//import { auth } from "../firebase";
import InputField from "../shared/InputField";
import CustomButton from "../shared/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const backImage = require("../assets/Back2.png");

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onHandleSignup = () => {
    if (email !== "" && password !== "") {
      //createUserWithEmailAndPassword(auth, email, password)
      //.then(() => {
      // console.log("Signup success");
      //  navigation.navigate("Home");
      //})
      //.catch((err) => Alert.alert("Signup error", err.message));
      console.log("Login success");
      navigation.navigate("Home");
    } else {
      Alert.alert("Signup error", "Please enter email and password");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet}>
        <View style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>
          {/* Using InputField component for email */}
          <InputField
            label="Email"
            placeholder="Enter email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          {/* Using InputField component for password */}
          <InputField
            label="Password"
            placeholder="Enter password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <CustomButton label="Sign Up" onPress={onHandleSignup} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.row}
          >
            <Text style={styles.accountText}>Do you have an account?</Text>
            <Text style={styles.linkText}> Log in</Text>
          </TouchableOpacity>
        </View>
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
    height: "50%",
    resizeMode: "cover",
  },
  whiteSheet: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    top: -30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  form: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
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

export default Signup;
