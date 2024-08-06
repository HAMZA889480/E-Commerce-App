import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, View, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// import { Provider } from "react-redux";
// import store from "./Redux/store";
import Navigation from "./Navigation";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      {/* <Provider store={store}> */}
      <Navigation />
      {/* </Provider> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
