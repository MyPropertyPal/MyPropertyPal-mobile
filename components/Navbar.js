import React from "react";
import { Text, View, StyleSheet } from "react-native";
function Navbar() {
  return (
    <View style={styles.container}>
      <Text>Navbar boi</Text>
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ABD2C0',
    display: 'flex',
    width: '100%',
    height: '5%',
    position: 'absolute'
  }
})
