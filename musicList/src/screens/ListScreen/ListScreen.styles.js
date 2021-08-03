import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  inputFirst: {
    height: 40,
    margin: 12,
    padding: 10,
    width: "60%",
    backgroundColor: "lightgrey",
    borderRadius: 4,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
});

export default styles;
