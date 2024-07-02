import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { useCart } from "../contexts/CartContext";
import Button from "../components/Button";
import { useEffect, useLayoutEffect, useState } from "react";
import { formatCurrency } from "../lib/services";
import CheckoutModal from "../components/CheckoutModal";

function CartScreen({ navigation }) {
  const { cart, clearCart, totalPrice } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  function checkout() {
    setIsVisible(true);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarBadge: cart.length > 0 ? cart.length : null,
    });
    cart.length > 0
      ? navigation.setOptions({
          tabBarBadge: cart.length,
        })
      : null;
  }, [navigation, cart]);

  if (!cart?.length)
    return (
      <View style={style.empty}>
        <Text style={style.centerTxt}>Cart is empty</Text>
      </View>
    );
  return (
    <ScrollView style={style.rootContainer}>
      <View style={style.flex}>
        <Header>Cart ({cart.length})</Header>

        <Pressable onPress={clearCart}>
          <Text style={style.btn}>Remove all</Text>
        </Pressable>
      </View>
      {cart?.map((cartItem, i) => (
        <CartItem key={cartItem.id + i} cartItem={cartItem} />
      ))}
      <CheckoutModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        navigation={navigation}
      />
      <View style={style.flex}>
        <Text style={style.text}>Total</Text>
        <Text style={style.header}>{formatCurrency(totalPrice)}</Text>
      </View>

      <Button style={style.checkoutBtn} onPress={checkout}>
        Checkout
      </Button>
    </ScrollView>
  );
}

export default CartScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 30,
    // backgroundColor: ''
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
  checkoutBtn: {
    backgroundColor: "#d87d4a",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
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
  },
  text: {
    fontSize: 20,
    color: "#979797",
  },
  empty: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
  centerTxt: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});
