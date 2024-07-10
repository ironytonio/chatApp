import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../shared/InputField";
import CustomButton from "../shared/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      //пропускаємо перевірку
      // navigation.navigate("Home");
      console.log("Login success");
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
          <InputField
            label="Email"
            placeholder="Enter email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <CustomButton label="Log in" onPress={onHandleLogin} />
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
