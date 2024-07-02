import React from "react";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import { PRODUCTS } from "../lib/constant";
import ProductItem from "./ProductItem";

function Product() {
  function renderItem({ item }) {
    // Define your pressHandler if needed
    function pressHandler() {
      // Handle item press
      console.log(`Pressed ${item}`);
    }

    return <ProductItem itemData={item} onPress={pressHandler} />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      /> */}

      {PRODUCTS.map((item) => (
        <ProductItem key={item.id} itemData={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});

export default Product;
