import { View, Text } from "react-native";

export default function TextExample() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text>Hello World</Text>
      <Text>
        <Text style={{ color: "white" }}>Hello </Text>Mojjam
      </Text>
    </View>
  );
}
