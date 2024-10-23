import { Pressable, StyleSheet, Text, View } from "react-native";

import Box from "./Box";

export default function AlignContent() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 7</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 8</Box>
    </View>
  );
}

// For layout
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
    flexWrap: "wrap",
    alignContent: "space-between", // fle-start, flex-end, center, stretch, space-between, space-around
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
