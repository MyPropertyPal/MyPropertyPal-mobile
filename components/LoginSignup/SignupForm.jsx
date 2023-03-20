import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import firebase from "firebase/compat";
import "firebase/firestore";

export const SignupForm = ({ setDisplay }) => {
  const auth = firebase.auth;
  const firestore = firebase.firestore;
  const db = firebase.firestore();
  const collectionRef = db.collection("myCollection");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  // function validateEmail(value) {
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   return emailRegex.test(value);
  // }

  const handleSignUp = async () => {
    if (password === password2) {
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          email,
          password
        );
        const { uid } = userCredential.user;
        await setDoc(doc(db, "users", `${name}`), { name: name, email: email });
        setDisplay("Login");
        alert(`Document added with ID: ${uid}`);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      {/* top section */}
      <Text>Signup</Text>
      {/* Form text fields*/}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Repeat Password"
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          style={styles.input}
          secureTextEntry
        />

        {/* botton section */}
        <View style={styles.buttonContainer}>
          {/* handle sign up */}
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
    backgroundColor: "#ABD2C0",
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
