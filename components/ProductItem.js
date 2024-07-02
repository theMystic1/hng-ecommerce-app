import { Image, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Button from "./Button";
import { getImagePath } from "../lib/services";

function ProductItem({ itemData, onPress, navigation, route }) {
  function handleRoute() {
    navigation.navigate("Product", { itemData });
  }
  return (
    <View style={styles.container}>
      <Image source={getImagePath(itemData.image.mobile)} style={styles.img} />

      <View style={styles.innerContent}>
        <View style={styles.heroView}>
          <Header style={styles.smallHeder}>
            {itemData.new ? "NEW PRODUCT" : ""}
          </Header>
          <Header style={styles.headerBig}>{itemData.name}</Header>
          <Text style={styles.text}>{itemData.description}</Text>

          <Button style={styles.btn} onPress={handleRoute}>
            see product
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // minHeight: 400,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 16,
  },

  img: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },

  innerContent: {
    // height: "50%",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  heroView: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // marginTop: 16,
  },
  smallHeder: {
    color: "#d87d4a",
    fontWeight: "300",
    letterSpacing: 8,
    textAlign: "center",
  },

  headerBig: {
    color: "#000",
    fontWeight: "700",
    fontSize: 28,
    textTransform: "uppercase",
    textAlign: "center",
  },

  text: {
    color: "#888",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#d87d4a",
    textTransform: "uppercase",
  },
});
