import React from "react";
import { View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ListItem.styles";
import { selectAlbum } from "../../../store/actions";

const ListItem = ({ item, navigation }) => {
  const selectedAlbum = useSelector((state) => state.selectedAlbum);

  const dispatch = useDispatch();

  const handleItemPress = () => {
    if (item.id.attributes["im:id"] !== selectedAlbum?.id.attributes["im:id"]) {
      dispatch(selectAlbum(item));
    }
    navigation.navigate("DetailView");
  };

  return (
    <View style={styles.container}>
      <Button title={item["im:name"].label} onPress={handleItemPress} />
    </View>
  );
};

export default ListItem;
