import { Pressable, StyleSheet, Text, View } from "react-native";

import Box from "./Box";

export default function RelativeAboluteLayout() {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: "#8e9b00",
          width: 100,
          height: 100,
          top: 75,
          left: 75,
        }}
      >
        Box 1
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", width: 100, height: 100 }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "#1c4c56", width: 100, height: 100 }}>
        Box 3
      </Box>
      <Box
        style={{
          backgroundColor: "#ab9156",
          width: 100,
          height: 100,
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        Box 4
      </Box>
      <Box style={{ backgroundColor: "#1c4c56", width: 100, height: 100 }}>
        Box 5
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", width: 100, height: 100 }}>
        Box 6
      </Box>
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
