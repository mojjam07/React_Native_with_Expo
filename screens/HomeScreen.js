import { View, Text, StyleSheet, Button } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  //   const navigation = useNavigation(); // to use this hook, remove the navigation props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Goto About"
        onPress={() =>
          navigation.navigate("About", {
            name: "Mojjam",
          })
        }
      />
      <Button
        title="Goto ThirdScreen"
        onPress={() =>
          navigation.navigate("Third", {
            name: "Home data",
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
