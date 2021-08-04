import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignContent: "center",
  },
  image: {
    height: 270,
    resizeMode: "stretch",
    marginHorizontal: 60,
  },
  albumInformationContainer: {
    backgroundColor: "#dedfe0",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 6,
  },
  albumInformation: {
    alignItems: "center",
  },
  albumNameLabel: {
    fontSize: 18,
    marginTop: 10,
  },
  artistNameLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  albumInformationDetails: {
    alignItems: "flex-start",
    marginLeft: 30,
    marginVertical: 30,
  },
  informationDetailItem: {
    marginTop: 10,
  },
  albumLinkButton: {
    alignItems: "center",
    width: 150,
    padding: 15,
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: "#38393b",
  },
  albumLinkText: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
