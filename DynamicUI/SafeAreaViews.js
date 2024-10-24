import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function SafeAreaViews() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello, world!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "plum", // for iOS devices
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    // paddingTop: 60, // remove this
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
