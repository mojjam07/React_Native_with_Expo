// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ThirdScreen from "../screens/ThirdScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function StackNavigation1() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button pressed!")}>
              <Text style={{ fontSize: 16, color: "#fff" }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Screen",
          }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} options={({route}) => ({
            title: route.params.name
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
