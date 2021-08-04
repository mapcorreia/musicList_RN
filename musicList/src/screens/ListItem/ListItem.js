import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import { selectAlbum } from "../../../store/actions";
import styles from "./ListItem.styles";

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
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item["im:image"][2].label,
            cache: "force-cache",
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.artistLabel}>{item["im:artist"].label}</Text>
        <Text style={styles.albumNameLabel}>{item["im:name"].label}</Text>
        <Text style={styles.priceLabel}>{item["im:price"].label}</Text>
      </View>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={handleItemPress}>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
