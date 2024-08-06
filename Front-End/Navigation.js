import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Navigation/StackNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import BottomNavigation from "./Navigation/BottomNavigation";
//import BottomNavigation from "./Navigation/BottomNavigation"
// import DrawerNavigation from "./Navigation/DrawerNavigation";
export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <BottomNavigation /> */}
        {/* <DrawerNavigation /> */}
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
