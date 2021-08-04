import { fetchAlbuns, getSpotifyArtistPage } from "../data/requests";
export const FETCH_ALBUNS_IN_PROGRESS = "FETCH_ALBUNS_IN_PROGRESS";
export const FETCH_ALBUNS_SUCCESS = "FETCH_ALBUNS_SUCCESS";
export const SELECT_ALBUM = "SELECT_ALBUM";
export const GET_SPOTIFY_PROFILE = "GET_SPOTIFY_PROFILE";

// Triggered on page load to fetch albuns
export const fetchAlbunsAction = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALBUNS_IN_PROGRESS,
  });

  const response = await fetchAlbuns();

  dispatch({
    type: FETCH_ALBUNS_SUCCESS,
    payload: response.data.feed.entry,
  });
};

export const selectAlbum = (item) => {
  return {
    type: SELECT_ALBUM,
    payload: item,
  };
};

export const getSpotifyProfile = (artistName) => async (dispatch) => {
  const response = await getSpotifyArtistPage(artistName);

  dispatch({
    type: GET_SPOTIFY_PROFILE,
    payload: response?.data?.artists.items[0],
  });
};
