import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, style, onPress }) {
  return (
    <View style={[styles.btnContainer, style]}>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    // width: 100,
    height: 50,
    paddingHorizontal: 18,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  btn: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
