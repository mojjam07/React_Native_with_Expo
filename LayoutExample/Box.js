import { View, Text, StyleSheet } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={(styles.box, style)}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 60,
    
    // for AlignContent & RelativeAboluteLayout
    width: 100, //50,
    height: 100, //50,
  },
  text: {
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
