import { View, Text, StyleSheet, Button } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function ThirdScreen({ route, navigation }) {
  //   const navigation = useNavigation(); // to use this hook, remove the navigation props

  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Button
        title="Update name"
        onPress={() =>
          navigation.setParams({
            name: "MojjamTech",
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
