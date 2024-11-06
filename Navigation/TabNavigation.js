// npm install @react-navigation/bottom-tabs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "../screens/SettingScreen";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="settings"
          component={SettingScreen}
          options={{
            tabBarLabelPosition: "beside-icon", // "below-icon"
            tabBarShowLabel: true, // false
            tabBarActiveTintColor: "purple",
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="about" component={AboutScreen} />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
            tabBarBadge: 7,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
