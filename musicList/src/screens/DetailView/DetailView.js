import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./DetailsView.styles";
import { useSelector, useDispatch } from "react-redux";
import { getSpotifyProfile } from "../../../store/actions";

const DetailView = () => {
  const selectedAlbum = useSelector((state) => state.selectedAlbum);
  const spotifyProfile = useSelector((state) => state.spotifyProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpotifyProfile(selectedAlbum["im:artist"].label));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: selectedAlbum["im:image"][2].label,
            cache: "force-cache",
          }}
        />
      </View>
      <View style={styles.albumInformationContainer}>
        <View style={styles.albumInformation}>
          <Text style={styles.albumNameLabel}>
            {selectedAlbum["im:name"].label}
          </Text>
          <Text style={styles.artistNameLabel}>
            {selectedAlbum["im:artist"].label}
          </Text>
        </View>
        <View style={styles.albumInformationDetails}>
          <Text style={styles.informationDetailItem}>
            Category: {selectedAlbum.category.attributes.term}
          </Text>
          <Text style={styles.informationDetailItem}>
            Release Date: {selectedAlbum["im:releaseDate"].attributes.label}
          </Text>
          <Text style={styles.informationDetailItem}>
            nº of tracks: {selectedAlbum["im:itemCount"].label}
          </Text>
          <Text style={styles.informationDetailItem}>
            {selectedAlbum["im:price"].label}
          </Text>
        </View>
        <View style={styles.albumInformation}>
          <TouchableOpacity
            style={styles.albumLinkButton}
            onPress={() => {
              Linking.openURL(selectedAlbum?.link.attributes.href);
            }}
          >
            <Text style={styles.albumLinkText}>Link to Album</Text>
          </TouchableOpacity>
          {!!spotifyProfile && (
            <TouchableOpacity
              style={styles.spotifyProfileLinkButton}
              onPress={() => {
                Linking.openURL(spotifyProfile?.external_urls.spotify);
              }}
            >
              <Text style={styles.albumLinkText}>Spotify Profile</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default DetailView;

const data = {
  "im:name": {
    label: "Welcome 2 America",
  },
  "im:image": [
    {
      label:
        "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/55/46/19/55461993-6fd7-d703-9b39-03043f585203/886449187249.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/55/46/19/55461993-6fd7-d703-9b39-03043f585203/886449187249.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/55/46/19/55461993-6fd7-d703-9b39-03043f585203/886449187249.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  "im:itemCount": {
    label: "12",
  },
  "im:price": {
    label: "$9.99",
    attributes: {
      amount: "9.99",
      currency: "USD",
    },
  },
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: "Album",
        label: "Album",
      },
    },
    attributes: {
      term: "Music",
      label: "Music",
    },
  },
  rights: {
    label:
      "℗ 2021 NPG Records, Inc. under exclusive license to Legacy Recordings",
  },
  title: {
    label: "Welcome 2 America - Prince",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://music.apple.com/us/album/welcome-2-america/1561643530?uo=2",
    },
  },
  id: {
    label: "https://music.apple.com/us/album/welcome-2-america/1561643530?uo=2",
    attributes: {
      "im:id": "1561643530",
    },
  },
  "im:artist": {
    label: "Prince",
    attributes: {
      href: "https://music.apple.com/us/artist/prince/155814?uo=2",
    },
  },
  category: {
    attributes: {
      "im:id": "15",
      term: "R&B/Soul",
      scheme: "https://music.apple.com/us/genre/music-r-b-soul/id15?uo=2",
      label: "R&B/Soul",
    },
  },
  "im:releaseDate": {
    label: "2021-07-30T00:00:00-07:00",
    attributes: {
      label: "July 30, 2021",
    },
  },
};
