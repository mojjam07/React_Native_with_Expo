import { View, Text, StyleSheet } from "react-native";

export default function StyleInheriance() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Text Inheritance <Text style={styles.boldText}>In Bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={styles.text}>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
    padding: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    // borderStyle: "dashed", // It uses its default 'solid'
    borderRadius: 10,
  },
  text: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5, // This won't take effect on iOS devices
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  // shadow works only on iOS
  boxShadow: {
    shadowColor: "blue", //"#333333",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  // elevation works for android
  androidShadow: {
    elevation: 10,
  },
});
