import React,{useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import firebase from "firebase/compat";
import "firebase/firestore";
import {auth} from '../../firebase'
import { useNavigation } from "@react-navigation/core";

export const LoginForm = ({ setDisplay }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();


  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      alert(`Logged in with: ${user.email}`)
      navigation.replace("Home")
  })
    .catch(error => alert(error.message))
}

  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      {/* top section */}
      <Text>Login</Text>
      {/* Form text fields*/}
      <View style={styles.inputContainer}>
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

        {/* botton section */}
        <View style={styles.buttonContainer}>
          {/* handle Login */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
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
    backgroundColor: "#ABD2C0",
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
