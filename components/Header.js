import { StyleSheet, Text } from "react-native";

function Header({ style, children }) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
