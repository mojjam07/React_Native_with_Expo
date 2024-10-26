import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function TextInput1() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter a text"
        // secureTextEntry
        // keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        multiline
      />
      <Text style={styles.text}>My name is {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "red",
  },
  text: {
    fontSize: 20,
    color: "blue",
    margin: 5,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
