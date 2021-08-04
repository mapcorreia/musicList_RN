import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#dedfe0",
  },
  searchIcon: {
    padding: 10,
    height: 40,
    backgroundColor: "#dedfe0",
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    backgroundColor: "#dedfe0",
    color: "#424242",
  },

  contentList: {
    marginTop: 30,
  },
});

export default styles;
