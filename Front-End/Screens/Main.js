import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { Searchbar, IconButton } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import CategoryList from "../Const/Categories";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#00CED1",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
          }}
        >
          <Searchbar
            style={{ width: "88%", marginVertical: "1%" }}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <IconButton
            icon="microphone"
            iconColor="#000"
            size={35}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            height: 55,
            paddingHorizontal: 10,
            alignItems: "center",
            backgroundColor: "#AFEEEE",
          }}
        >
          <IconButton
            icon="map-marker"
            iconColor="#444"
            size={35}
            onPress={() => console.log("Location")}
          />
          <Pressable>
            <Text style={{ fontSize: 14, fontWeight: "500", letterSpacing: 1 }}>
              Devilered to Hamza -Lahore
            </Text>
          </Pressable>
          <IconButton
            icon="menu-down"
            iconColor="#444"
            size={35}
            onPress={() => console.log("location menu")}
          />
        </View>

        {/* Categories List */}

        <ScrollView
          horizontal
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 5 }}
          showsHorizontalScrollIndicator={false}
        >
          {CategoryList.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={{
                  backgroundColor: "#fff",
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 5,
                  width: 100,
                  height: 100,
                  justifyContent: "space-around",
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                  }}
                />

                <Text
                  style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
