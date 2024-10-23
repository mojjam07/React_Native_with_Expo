import { View, Alert, Button } from "react-native";

export default function AlertExample() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert 2"
        onPress={() =>
          Alert.alert("Invalid data!", "Your data is not correct!")
        }
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid data!", "Your data is not correct!", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
      />
    </View>
  );
}
