import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./screens/Login";

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text style={styles.text}>Welcome to MyPropertPal</Text>
    //   <Button label="Login" />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
