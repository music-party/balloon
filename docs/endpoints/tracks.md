# Tracks Endpoint

[docs]: https://img.shields.io/static/v1?logo=spotify&label=&message=Docs&color=gray&style=flat
[scopes]: https://img.shields.io/static/v1?logo=&label=scopes&message=none&color=informational&style=flat

## Get a Track

Get Spotify catalog information for a single track identified by its unique Spotify ID.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track "Spotify Web API Documentation")
![SCOPES]

## Get Multiple Tracks

Get Spotify catalog information for multiple tracks based on their Spotify IDs.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks "Spotify Web API Documentation")
![SCOPES]

## Get the Current User's Saved Tracks

Get a list of the songs saved in the current Spotify user's library.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=user-library-read&color=informational&style=flat)

## Save Tracks for the Current User

Save one or more tracks to the current user's library.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/save-tracks-user "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=user-library-modify&color=informational&style=flat)

## Remove the Current User's Saved Tracks

Remove one or more tracks from the current user's library.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-user "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=user-library-modify&color=informational&style=flat)

## Check the Current User's Saved Tracks

Check if one or more tracks is already saved in the current Spotify user's library.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-tracks "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=user-library-read&color=informational&style=flat)

## Get a Track's Audio Analysis

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track's structure and musical content, including rhythm, pitch, and timbre.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-analysis "Spotify Web API Documentation")
![SCOPES]

## Get a Track's Audio Features

Get audio feature information for a single track identified by its unique Spotify ID.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features "Spotify Web API Documentation")
![SCOPES]

## Get Multiple Tracks' Audio Features

Get audio features for multiple tracks based on their Spotify IDs.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features "Spotify Web API Documentation")
![SCOPES]

## Get Recommendations

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations "Spotify Web API Documentation")
![SCOPES]
