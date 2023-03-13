import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const SignupForm = ({setDisplay}) => {
  return (
    <View>
      <Text>SIGNUP SCREEN</Text>
      <Text>*Signup form here*</Text>
      <TouchableOpacity onPress={()=>{setDisplay('Login')}}>
        <Text> Login here </Text>
      </TouchableOpacity>
    </View>
  );
};
