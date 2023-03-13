import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const LoginForm = ({setDisplay}) => {
  return (
    <View>
      <Text>SIGNUP SCREEN</Text>
      <Text>*Login form here*</Text>
      <TouchableOpacity onPress={()=>{setDisplay('Signup')}}>
        <Text> Signup here </Text>
      </TouchableOpacity>
    </View>
  );
};
