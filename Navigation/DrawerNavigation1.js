// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler react-native-reanimated
// rename App.js to AppStack.js to separate the code from previous tutorial

import "react-native-gesture-handler"; // must be @ the top
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/DashboardScreen";
import SettingScreen from "../screens/SettingScreen";

// add plugin to babel.config.js after 'preset'
// plugins: ["react-native-reanimated/plugin"],
// recommended to clear the cache before starting the app 'npx expo start -c'
// just add -c to 'expo start' in package.json

const Drawer = createDrawerNavigator();

export default function DrawerNavigation1() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard Label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#f0f0f0",
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
