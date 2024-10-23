import { Pressable, StyleSheet, Text, View } from "react-native";

import Box from "./Box";

export default function FlexShrink() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", flexShrink: 1 }}>
        Box 1 Shrink
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", flexShrink: 1 }}>
        Box 2 Shrink
      </Box>
    </View>
  );
}

// For layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    width: 250,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
