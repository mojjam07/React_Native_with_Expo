import { View, Text, StyleSheet, Button } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings")} />
    </View>
  );
};

export default Dashboard;

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
