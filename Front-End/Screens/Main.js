import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { Searchbar, IconButton } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import CategoriesData from "../Const/CategoriesData";
import DealsData from "../Const/DealsData";
import ProductsData from "../Const/ProductsData";
import ProductsList from "../Components/ProductList";
import DropDownList from "../Components/DropDownList";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [DropDownCategory, setDropDownCategory] = useState("Select Category");
  const [mainCategories, setMainCategories] = useState("All");

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
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

        {/* Addess View */}
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
          {CategoriesData.map((item, index) => {
            return (
              <Pressable
                onPress={() => setMainCategories(item.name)}
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
        {mainCategories === "All" ? (
          <View>
            {/* Image Slider */}

            {/* Hot Deals for the week */}

            <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
              Trending Deals of the week
            </Text>

            {/* Image source={require("../assets/Category/cloths.png")} */}

            <View>
              {DealsData.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("ProductInfo", { product: item });
                    }}
                    key={index}
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#fff",
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                      elevation: 5,
                    }}
                  >
                    <Image
                      source={item.images[0]}
                      resizeMode="contain"
                      style={{
                        width: 100,
                        height: 100,
                        justifyContent: "center",
                      }}
                    />

                    <View style={{ marginLeft: 10 }}>
                      <Text
                        numberOfLines={1}
                        style={{ fontSize: 16, fontWeight: "bold" }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={{ fontSize: 14, color: "#444" }}
                      >
                        {item.description}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#444" }}>
                        {item.features.map((feature, index) => (
                          <Text numberOfLines={1} key={index}>
                            {feature}{" "}
                          </Text>
                        ))}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#444" }}>
                        Rs. {"  "}
                        {item.price}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#444" }}>
                        {item.discount}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>

            <DropDownList categoryHandler={setDropDownCategory} />
            {/* Products */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {DropDownCategory === "Select Category"
                ? ProductsData.map((item, index) => {
                    return <ProductsList key={index} product={item} />;
                  })
                : ProductsData.filter(
                    (item) => item.name === DropDownCategory
                  ).map((item, index) => {
                    return <ProductsList key={index} product={item} />;
                  })}
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {ProductsData.filter(
              (item) => item.category === mainCategories
            ).map((item, index) => {
              return <ProductsList key={index} product={item} />;
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
