import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function AboutScreen({ navigation }) {
  //   const navigation = useNavigation(); // to use this hook, remove the navigation props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button
        title="Goto Home"
        onPress={() =>
          navigation.navigate("Home", {
            name: "Guest",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
