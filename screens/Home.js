import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, doc, querySnapshot, where } from "firebase/firestore";
import { app, db, auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const user = auth.currentUser;

  function handleSignOut() {
    auth
      .signOut()
      .then(() => {
        alert("User signed out");
        navigation.replace("Login");
      })
      .catch((error) => {
        alert("Error signing out:", error);
      });
  }

  useEffect(() => {
    app
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          let data = snapshot.data();
          if (
            data.email.toLowerCase() == auth.currentUser.email.toLowerCase()
          ) {
            setName(data.name);
            setEmail(data.email);
          }
        });
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {name}</Text>
      <Text style={styles.text}>This is the home screen</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#EBECDA",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
