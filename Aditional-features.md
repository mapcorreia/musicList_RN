### Aditional Features

_**1. Spotify Integration:**_ On detail page, is possible to navigate to Spotify Artist Page
_**2. Loading Spinner:**_ On list render, while data is not fetched, a loading spinner is visible

#### 1. Spotify Integration

- On Detail Page Load, using the artist name, is triggered a request to Spotify API;
- The response then, populates the store with the artist details;
- Through a redux hook, the Details Page "Spotify Profile" button gets the external link button;

However this feature depends on an acess token, with 1h expiration time, which i got in [here](https://developer.spotify.com/console/get-search-item/)

There are ways to go beyond this obstacle, like [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow), but it would take longer than the scope of this exercise.

So, to be possible to evaluate this feature, besides analysing the code, here's the [link](https://vimeo.com/582928035) to a video, showing it working.
