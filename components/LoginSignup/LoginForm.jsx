import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";

export const LoginForm = ({ setDisplay }) => {
  const handleLogin = () => {
    alert("you have Logged in");
  };
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      {/* top section */}
      <Text>Login</Text>
      {/* Form text fields*/}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />

        {/* botton section */}
        <View style={styles.buttonContainer}>
          {/* handle Login */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleLogin();
            }}
          >
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
          {/* switch screens */}
          <TouchableOpacity
            style={styles.button}
            t
            onPress={() => {
              setDisplay("Signup");
            }}
          >
            <Text style={styles.buttonText} >Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "gray",
    display: "flex",
    height: "40%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 0.75,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 8,
  },

  button: {
    backgroundColor: "black",
    width: "60%",
    height: 30,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    margin: 3,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 10,
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
    flexDirection: "column",
  },
  inputContainer: {
    marginTop: 10,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
