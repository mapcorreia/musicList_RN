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
