# @music-party/balloon

![Website](https://img.shields.io/website?down_color=red&down_message=offline&label=API&logo=spotify&up_color=%231DB954&up_message=online&url=https%3A%2F%2Fapi.spotify.com%2F)

`balloon` is the in-house typescript wrapper for the [Spotify Web API](https://developer.spotify.com/documentation/web-api/reference/#/).

## Table of Contents

## Motivation

idk i just wanted to

## Usage

### General

Create a new instance with an appropriately scoped access token to make requests to the Web API.

```ts
import SpotifyAPI from "balloon";

const spotify = new SpotifyAPI({ access_token: "NgCXRK...MzYjw" });

const { genres } = spotify.artists.getArtist("610EjgFatGvVPtib97jQ8G");
```

### Authorization

Spotify provides excellent documentation on the authorization process

```typescript
import SpotifyAPI from "balloon";

const spotify = new SpotifyAPI({
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  scope: process.env.SPOTIFY_SCOPE,
});

const { url, state } = spotify.getAuthorizationUrl();
```

### Endpoints

- [Albums](./docs/endpoints/albums.md)
- [Artists](./docs/endpoints/artists.md)
- [Categories](./docs/endpoints/categories.md)
- [Episodes](./docs/endpoints/episodes.md)
- [Genres](./docs/endpoints/genres.md)
- [Markets](./docs/endpoints/markets.md)
- [Player](./docs/endpoints/player.md)
- [Playlists](./docs/endpoints/playlists.md)
- [Search](./docs/endpoints/search.md)
- [Shows](./docs/endpoints/shows.md)
- [Tracks](./docs/endpoints/tracks.md)
- [Users](./docs/endpoints/users.md)
