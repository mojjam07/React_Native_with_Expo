import { Pressable, StyleSheet, Text, View } from "react-native";

import Box from "./Box";

export default function BoxApp() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f", flex: 1 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56", flex: 1 }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156", flex: 1 }}>Box 4</Box>
      <Box style={{ backgroundColor: "#1c4c56", flex: 2 }}>Box 5</Box>
      <Box style={{ backgroundColor: "#b65d1f", flex: 1 }}>Box 6</Box>
      <Box style={{ backgroundColor: "#8e9b00", flex: 3 }}>Box 7</Box>
      <Box style={{ backgroundColor: "#b65d1f", flex: 1 }}>Box 8</Box>
    </View>
  );
}

// For layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});