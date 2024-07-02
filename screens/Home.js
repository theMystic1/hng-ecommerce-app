import { ScrollView, StyleSheet } from "react-native";
import Hero from "../components/Hero";
import { PRODUCTS } from "../lib/constatnt";
import ProductItem from "../components/ProductItem";
// import ProductItem from "../contexts/ProductItem";

function Home({ navigation, route }) {
  return (
    <ScrollView style={styles.rootContainer}>
      <Hero />
      {PRODUCTS.map((product) => (
        <ProductItem
          itemData={product}
          key={product.id}
          navigation={navigation}
          route={route}
        />
      ))}
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    // backgroundColor: "#f8f8f8",
  },
});
