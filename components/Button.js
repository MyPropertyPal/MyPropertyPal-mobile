import { StyleSheet, View, Pressable, Text, TouchableOpacity } from 'react-native';

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 58,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  buttonPressed: {
    backgroundColor: 'green'
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});
