import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Sign Up to MyPropertyPal</Text>
        <Button title="Login" onPress={()=>{
          navigation.navigate('Login')
        }}/>
      </View>
    </View>
  );
}

export default SignUp;

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
  },
  title: {
    paddingBottom: 10,
  },
});
