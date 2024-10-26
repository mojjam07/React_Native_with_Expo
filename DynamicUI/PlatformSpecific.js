import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";
import CustomButton from "./platformSpec/CustomButton";

export default function PlatformSpecific() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello, G world!</Text>
          <CustomButton title="Press" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 24 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "green",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "orange",
        fontSize: 30,
        fontWeight: "bold",
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
