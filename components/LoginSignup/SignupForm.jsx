import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";

export const SignupForm = ({ setDisplay }) => {
  const handleSignup = () => {
    alert("you have signed up");
  };
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      {/* top section */}
      <Text>Signup</Text>
      {/* Form text fields*/}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Repeat Password" />
        {/* botton section */}
        <View style={styles.buttonContainer}>
          {/* handle sign up */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSignup();
            }}
          >
            <Text style={styles.buttonText}> Complete signup </Text>
          </TouchableOpacity>
          {/* switch screens */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setDisplay("Login");
            }}
          >
            <Text style={styles.buttonText}> Login here </Text>
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
    height: "50%",
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 8

  },

  button: {
    backgroundColor: "black",
    width: "60%",
    height:30,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    margin: 3,
    justifyContent: 'center'

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
