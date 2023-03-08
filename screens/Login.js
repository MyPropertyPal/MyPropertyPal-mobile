import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text >Welcome to the MyPropertyPal</Text>
        <Button style={styles.buttonContainer} label={'Signup'}/>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "grey",
    height: "50%",
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  }
});
