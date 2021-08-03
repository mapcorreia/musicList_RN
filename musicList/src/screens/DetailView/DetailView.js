import React from "react";
import { Text, View, Button, Image, Touchable } from "react-native";
import styles from "./DetailsView.styles";
import { useSelector } from "react-redux";

const DetailView = () => {
  const selectedAlbum = useSelector((state) => state.selectedAlbum);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: selectedAlbum["im:image"][2].label,
          cache: "force-cache",
        }}
      />
      <View>
        <Text></Text>
        <Text style={styles.textStyle}>{selectedAlbum["im:name"].label}</Text>
        <Button style={styles.albumLinkButton} title={"Link to Album"} />
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
