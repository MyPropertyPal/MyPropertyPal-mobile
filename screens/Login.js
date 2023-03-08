import React from "react";
import { View, Text,StyleSheet } from "react-native";
function Login() {
  return (
    <View style={styles.container}>
      <Text >Welcome to the login page</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    display: 'flex',

  }
})
