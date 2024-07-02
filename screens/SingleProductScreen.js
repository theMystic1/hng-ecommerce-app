import { Pressable, StyleSheet, View } from "react-native";
import SingleProduct from "../components/SingleProduct";
import { useLayoutEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ navigation, route }) {
  const { itemData } = route.params;

  function navigateCart() {
    navigation.navigate("Cart");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: itemData.name,
      headerBackTitle: "Back",
      headerRight: ({}) => (
        <Pressable onPress={navigateCart}>
          <Ionicons name="cart-sharp" size={24} color={"#000"} />
        </Pressable>
      ),
    });
  }, [navigation, itemData]);
  return (
    <View style={styles.rootContainer}>
      <SingleProduct itemData={itemData} />
    </View>
  );
}

export default SingleProductScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 30,
  },
});
