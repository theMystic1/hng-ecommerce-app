import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import Button from "./Button";

function Hero() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradient} colors={["#101010", "#101010"]}>
        <ImageBackground
          source={require("../assets/shared/mobile/image-xx99-mark-two-headphones_prev_ui.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.innerContent}>
            <View style={styles.heroView}>
              <Header style={styles.smallHeder}>NEW PRODUCT</Header>
              <Header style={styles.headerBig}>xx99 MARK II HEADPHONES</Header>
              <Text style={styles.text}>
                experience natural , lifelike audio and exceptional build
                quality made for the passionate music enthusiast.
              </Text>

              <Button style={styles.btn}>see product</Button>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

export default Hero;

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: "100%",
    alignItems: "center",
    // backgroundColor: "#000",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContent: {
    flex: 1,
    // width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    // Add any additional styling for inner content here
  },

  heroView: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  smallHeder: {
    color: "#979797",
    fontWeight: "300",
    letterSpacing: 8,
    textAlign: "center",
  },

  headerBig: {
    color: "#ffff",
    fontWeight: "700",
    fontSize: 40,
    // width: "70%",
    textTransform: "uppercase",
    textAlign: "center",
  },

  text: {
    color: "#979797",
    fontWeight: "300",
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#d87d4a",
    textTransform: "uppercase",
  },
});
