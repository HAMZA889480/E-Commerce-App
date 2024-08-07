import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { useState } from "react";
import SaleTag from "../assets/Tags/pngegg (2).png";
import { Icon } from "react-native-paper";
import { List } from "react-native-paper";

const Product = ({ product }) => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <Pressable
      style={{
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: "#fff",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {product.discount && (
        <Image
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 60,
            height: 60,
            zIndex: 1,
          }}
          source={SaleTag}
        />
      )}
      <Image
        resizeMode="contain"
        style={{ width: "80%", height: 150, marginTop: 5 }}
        source={product.image}
      />
      <Text
        numberOfLines={1}
        style={{
          width: 150,
          marginTop: 10,
          textAlign: "center",
          paddingHorizontal: 10,
        }}
      >
        {product.title}
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {product.price}
        </Text>
        {product.sold > 0 ? (
          <Text
            style={{
              paddingLeft: 20,
              color: "#f78307",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            {product.sold} Sold
          </Text>
        ) : (
          <Text
            style={{
              paddingLeft: 20,
              color: "#f77707",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            New
          </Text>
        )}
      </View>
      <Pressable
        style={{
          //backgroundColor: "#ffc72c",

          backgroundColor: "#f7b707",
          padding: 10,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 20,
          width: "93%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            letterSpacing: 0.4,
            fontSize: 15,
          }}
        >
          Add to Cart
        </Text>
        <Icon source="cart-plus" color="#000" size={23} />
      </Pressable>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({});
