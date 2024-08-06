import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Main from "../Screens/Main";

export default function HomeStackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
