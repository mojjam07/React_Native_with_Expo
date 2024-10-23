import { View, StyleSheet } from "react-native";

export default function UserInterface() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
});
