import { View, Text, StyleSheet } from "react-native";

export default function BoxModel() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={styles.text}>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
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
  box: {
    width: "25%",
    height: "25%",
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "dashed",
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
});
