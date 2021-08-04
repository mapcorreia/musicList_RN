import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FlatList, View, Text, TextInput } from "react-native";
import { fetchAlbunsAction } from "../../../store/actions";
import ListItem from "../ListItem/ListItem";

import styles from "./ListScreen.styles";

const ListScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const albuns = useSelector((state) => state.albuns);

  useEffect(() => {
    dispatch(fetchAlbunsAction());
  }, [dispatch]);

  const handleSearch = (criteria) => {
    setSearchTerm(criteria.toLowerCase());
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.inputFirst}
          onChangeText={handleSearch}
          defaultValue={searchTerm}
        />
      </View>
      <FlatList
        keyExtractor={(album) => album.id.attributes["im:id"]}
        data={albuns}
        renderItem={({ item }) => {
          if (item["im:name"].label.toLowerCase().includes(searchTerm)) {
            return <ListItem item={item} navigation={navigation} />;
          }
        }}
      />
    </View>
  );
};

export default ListScreen;
