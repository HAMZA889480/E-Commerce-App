import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import EmailVerification from "../Screens/EmailVerification";
import ForgetPassword from "../Screens/ForgetPassword";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerTitle: () => null,

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} />
                </TouchableOpacity>

                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 22,
                    letterSpacing: 0.8,
                  }}
                >
                  Forget Password
                </Text>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{
          headerTitle: () => null,

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} />
                </TouchableOpacity>

                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 22,
                    letterSpacing: 0.8,
                  }}
                >
                  Email Verification
                </Text>
              </View>
            );
          },
        }}
      />
      {/* <Stack.Screen
        name="Home"
        component={DrawerGroup}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={{
          headerStyle:{
            backgroundColor:hedearColor,
            
          },
         
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                    hideMenu();
                  }}
                  style={{ marginRight: 10 }}
                >
                  <Icon source="arrow-left" color={iconColor} size={25} />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 22,
                    color:iconColor,
                    fontWeight: "semi-bold",
                    marginLeft: 15,
                  }}
                >
                  View Task
                </Text>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    // <MenuList />;

                    toggleMenu();
                  }}
                  style={{ marginRight: 10 }}
                >
                  <Icon source="dots-vertical" color={iconColor} size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />


<Stack.Screen
        name="UpdateUserName"
        component={UpdateUserName}
        options={{
          headerStyle:{
            backgroundColor:hedearColor,
            
          },
         
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                    hideMenu();
                  }}
                  style={{ marginRight: 10 }}
                >
                  <Icon source="arrow-left" color={iconColor} size={25} />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 18,
                    color:iconColor,
                    fontWeight: "semi-bold",
                    marginLeft: 15,
                  }}
                >
                  Update User Name
                </Text>
              </View>
            );
          },
          
        }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          headerStyle:{
            backgroundColor:hedearColor,
            
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Icon source="arrow-left" color={iconColor} size={20} />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 22,
                    color: iconColor,
                    fontWeight: "bold",
                  }}
                >
                  Add New Task
                </Text>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="EditScreen"
        component={EditTask}
       
        options={{
          headerStyle:{
            backgroundColor:hedearColor,
            
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                    hideMenu();
                  }}
                  style={{ marginRight: 10 }}
                >
                  <Icon source="arrow-left" color={iconColor} size={25} />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 22,
                    color: iconColor,
                    fontWeight: "semi-bold",
                    marginLeft: 15,
                  }}
                >
                  Edit Task
                </Text>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    // <MenuList />;

                    toggleMenu();
                  }}
                  style={{ marginRight: 10 }}
                >
                  <Icon source="dots-vertical" color={iconColor} size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />  */}
    </Stack.Navigator>
  );
}
