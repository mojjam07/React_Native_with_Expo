import { View, StatusBar } from "react-native";

export default function StatusBarExample() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden />
    </View>
  );
}
