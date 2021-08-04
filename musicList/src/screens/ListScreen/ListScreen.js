import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FlatList,
  View,
  TextInput,
  ActivityIndicator,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { fetchAlbunsAction } from "../../../store/actions";
import ListItem from "../ListItem/ListItem";
import styles from "./ListScreen.styles";

const ListScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const albuns = useSelector((state) => state.albuns);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchAlbunsAction());
  }, [dispatch]);

  const handleSearch = (criteria) => {
    setSearchTerm(criteria.toLowerCase());
  };

  const handleFilterCriteria = (item) => {
    const albumNameMatch = item["im:name"].label
      .toLowerCase()
      .includes(searchTerm);

    const artistNameMatch = item["im:artist"].label
      .toLowerCase()
      .includes(searchTerm);

    return albumNameMatch || artistNameMatch;
  };

  return (
    <View>
      {!isLoading && (
        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <TextInput
              placeholder="Search"
              style={styles.input}
              onChangeText={handleSearch}
              defaultValue={searchTerm}
            />
            <Icon
              style={styles.searchIcon}
              name="ios-search"
              size={20}
              color="#000"
            />
          </View>
        </View>
      )}
      {!isLoading && (
        <FlatList
          style={styles.contentList}
          keyExtractor={(album) => album.id.attributes["im:id"]}
          data={albuns}
          renderItem={({ item }) => {
            if (handleFilterCriteria(item)) {
              return <ListItem item={item} navigation={navigation} />;
            }
          }}
        />
      )}
      {isLoading && (
        <ActivityIndicator size="large" style={styles.contentList} />
      )}
      {!albuns?.length && !isLoading && (
        <Text>Unable to Load Music Albuns</Text>
      )}
    </View>
  );
};

export default ListScreen;
