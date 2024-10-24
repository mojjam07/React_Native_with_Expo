import { useState, useEffect } from "react"; // Step-1
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function DimensionApiDrawback() {
  const [dimension, setDimension] = useState({
    window: Dimensions.get("widow"),
  }); // step-2
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimension({ window });
    });
    return () => subscription?.remove();
  }); // step-3

  // step-4
  const { window } = dimension;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 50 ? 50 : 24 }}>Welcome</Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
});
