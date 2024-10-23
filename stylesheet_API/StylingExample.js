import { View, Text, StyleSheet } from "react-native";

export default function StylingExample() {
  return (
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Text>StyleSheet API</Text>
    // </View>

    // The actual StyleSheet API
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {
    fontSize: 24,
    color: "white",
  },
});
