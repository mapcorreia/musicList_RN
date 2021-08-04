import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    marginVertical: 10,
    backgroundColor: "#dedfe0",
  },
  image: {
    marginHorizontal: 20,
    height: 100,
    width: 100,
    resizeMode: "stretch",
  },
  content: {
    flex: 6,
    paddingVertical: 10,
  },
  artistLabel: {
    fontSize: 13,
  },
  albumNameLabel: {
    fontSize: 16,
    paddingVertical: 10,
  },
  priceLabel: {
    fontSize: 12,
  },
  arrow: {
    flex: 1,
    backgroundColor: "darkgrey",
  },
});

export default styles;
