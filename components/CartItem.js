import { formatCurrency, getImagePath } from "../lib/services";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import { useCart } from "../contexts/CartContext";

function CartItem({ cartItem }) {
  // console.log(cartItem);
  const { removeFromCart } = useCart();
  return (
    <View style={style.rootContainer}>
      <View style={style.flex}>
        <View style={style.nextFlex}>
          <Image
            source={getImagePath(cartItem.image.mobile)}
            style={style.image}
          />
          <View>
            <Header style={style.header}>{cartItem.name}</Header>
            <Text style={style.text}>{formatCurrency(cartItem.price)}</Text>
          </View>
        </View>
        <Button
          style={style.btnRem}
          onPress={() => removeFromCart(cartItem.id)}
        >
          <Ionicons name="remove" size={24} color="black" />
        </Button>
      </View>
    </View>
  );
}

export default CartItem;

const style = StyleSheet.create({
  rootContainer: {
    marginBottom: 8,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    marginBottom: 10,
  },

  btn: {
    color: "#d87d4a",
    fontSize: 18,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 4,
  },
  btnRem: {
    backgroundColor: "#f1f1f1",
    height: 40,
    shadowOpacity: 0.2,
    elevation: 3,
  },

  nextFlex: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    width: 180,
  },
  text: {
    fontSize: 16,
    color: "#979797",
  },
});
