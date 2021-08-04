// fetch data from the api
const API_URL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export const fetchAlbuns = async () => {
  const response = await fetch(API_URL);

  let data;

  try {
    data = await response.json();
  } catch (error) {
    data = {
      details: "json parse failed, probably a non json response",
    };
  }

  return {
    isError: !response.ok,
    data,
    status: response.status,
  };
};

const SPOTIFY_API_URL = "https://api.spotify.com/v1/search";
const SPOTIFY_TOKEN =
  "Bearer BQARgh4WwXzq94EPnjdkQZHdv6VqStbwCqdZUfn5iaLLuLZfpKPHF28j8-56hg6cnqMXMw2ggJ_eQEDGu-gjbYnaPh7gBIfO91ACQwo0FG9tpgSC8J-fUSqrlPrTCIpYxCCvXwcQxA";

export const getSpotifyArtistPage = async (artistName) => {
  const response = await fetch(
    `${SPOTIFY_API_URL}?q=${artistName}&type=artist`,
    {
      method: "GET",
      headers: {
        Authorization: SPOTIFY_TOKEN,
      },
    }
  );

  let data;

  try {
    data = await response.json();
  } catch (error) {
    data = {
      details: "json parse failed, probably a non json response",
    };
  }

  return {
    isError: !response.ok,
    data,
    status: response.status,
  };
};
