import { View, Text, StyleSheet } from "react-native";

export default function MultipleStyle() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Lightblue Box</Text>
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
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
