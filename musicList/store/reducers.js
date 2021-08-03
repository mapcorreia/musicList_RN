import { combineReducers } from "redux";
import {
  FETCH_ALBUNS_SUCCESS,
  FETCH_ALBUNS_IN_PROGRESS,
  SELECT_ALBUM,
} from "../store/actions";

export const albunsListReducer = (albuns = [], action) => {
  if (action.type === FETCH_ALBUNS_SUCCESS) {
    return action.payload;
  }

  return albuns;
};

// Triggered on ListItem press
export const selectedAlbumReducer = (selectedAlbum = null, action) => {
  if (action.type === SELECT_ALBUM) {
    return action.payload;
  }

  return selectedAlbum;
};

export const isLoadingReducer = (isloading = false, action) => {
  if (action.type === FETCH_ALBUNS_IN_PROGRESS) {
    return true;
  }

  if (action.type === FETCH_ALBUNS_SUCCESS) {
    return false;
  }

  return isloading;
};

export default combineReducers({
  albuns: albunsListReducer,
  selectedAlbum: selectedAlbumReducer,
  isLoading: isLoadingReducer,
});
