import { Pressable, StyleSheet, Text, View } from "react-native";

import Box from "./Box";

export default function AlignItems() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 7</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 8</Box> */}
    </View>
  );
}

// For layout
const styles = StyleSheet.create({
  container: {
    //justifyContent: "space-evenly", // flex-start, center, flex-end, space-between, space-around, space-evenly
    //flexDirection: "row", // column-reverse, row-reverse
    alignItems: "center", // stretch, flex-start, flex-end, center, base-line
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
