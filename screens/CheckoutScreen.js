import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

function CheckoutScreen() {
  return (
    <ScrollView style={style.rootContainer}>
      <View style={style.flex}>
        <Header>Cart (3)</Header>
      </View>

      <Pressable>
        <Text>Remove all</Text>
      </Pressable>
    </ScrollView>
  );
}

export default CheckoutScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: 16,
    // backgroundColor: ''
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  btn: {
    color: "#",
  },
});
