import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Button from "./Button";
import { formatCurrency, getImagePath } from "../lib/services";
import { useCart } from "../contexts/CartContext";

function SingleProduct({ itemData, onPress }) {
  const { addToCart, cart, removeFromCart } = useCart();

  // function isInCart(id) {
  //   return cart.some((item) => item.id === id);
  // }

  const isInCart = cart.some((item) => item.id === itemData.id);

  function handleAddToCart() {
    // if(isInCart) {
    //   removeFromCart()
    // }
    isInCart ? removeFromCart(itemData.id) : addToCart(itemData);
  }
  const { features, includes } = itemData;
  const text = features.split(/\n\n/);
  return (
    <ScrollView style={styles.container}>
      <Image source={getImagePath(itemData.image.mobile)} style={styles.img} />

      <View style={styles.innerContent}>
        <View style={styles.heroView}>
          <Header style={styles.smallHeder}>
            {itemData.new ? "NEW PRODUCT" : ""}
          </Header>
          <Header style={styles.headerBig}>{itemData.name}</Header>
          <Text style={styles.text}>{itemData.description}</Text>

          <Header>{formatCurrency(itemData.price)}</Header>

          <Button
            style={isInCart ? styles.btnInCart : styles.btn}
            onPress={handleAddToCart}
          >
            {isInCart ? "Remove from cart" : "    Add to cart"}
          </Button>
        </View>
      </View>

      <View style={styles.features}>
        <Header style={styles.headerBig}>FEATURES</Header>

        <View>
          {text.map((txt, i) => (
            <Text style={styles.text} key={i}>
              {txt}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.features}>
        <Header style={styles.headerBig}>IN THE BOX</Header>

        {includes.map((feature, i) => (
          <View key={i} style={styles.includesContainer}>
            <Text style={styles.includesQ}>{feature.quantity + "x"}</Text>
            <Text style={styles.text}>{feature.item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // minHeight: 400,
    // alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 16,
  },

  img: {
    height: 400,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },

  innerContent: {
    // height: "50%",
    // alignItems: "center",
    // justifyContent: "center",
    gap: 8,
  },

  heroView: {
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
    // marginTop: 16,
  },
  smallHeder: {
    color: "#d87d4a",
    fontWeight: "300",
    letterSpacing: 8,
    // textAlign: "center",
    marginVertical: 16,
  },

  headerBig: {
    color: "#000",
    fontWeight: "700",
    fontSize: 28,
    textTransform: "uppercase",
    marginVertical: 16,
    // textAlign: "center",
  },

  text: {
    color: "#979797",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    // textAlign: "center",
  },

  btn: {
    backgroundColor: "#d87d4a",
    textTransform: "uppercase",
  },
  btnInCart: {
    backgroundColor: "#979797",
    textTransform: "uppercase",
  },

  features: {
    marginTop: 48,
  },

  includesContainer: {
    flexDirection: "row",
    // alignItems: "center",
    gap: 16,
  },
  includesQ: {
    color: "#d87d4a",
    fontSize: 16,
  },
});
