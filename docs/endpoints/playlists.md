# Playlists Endpoint

[docs]: https://img.shields.io/static/v1?logo=spotify&label=&message=Docs&color=gray&style=flat

## Get a Playlist

Get a playlist owned by a Spotify user.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=none&color=informational&style=flat)

## Change a Playlist's Details

Change a playlist's name and public/private state. (The user must, of course, own the playlist.)

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/change-playlist-details "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-modify-public%20playlist-modify-private&color=informational&style=flat)

## Get a Playlist's Items

Get full details of the items of a playlist owned by a Spotify user.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-read-public%20playlist-read-private&color=informational&style=flat)

## Add Items to a Playlist

Add one or more items to a user's playlist.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/add-tracks-to-playlist "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-modify-public%20playlist-modify-private&color=informational&style=flat)

## Update a Playlist's Items

Either reorder or replace items in a playlist depending on the request's parameters.

+ To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
+ To replace items, include `uris` as either a query parameter or in the request's body.

Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.  
**_Note_**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/reorder-or-replace-playlists-tracks "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-modify-public%20playlist-modify-private&color=informational&style=flat)

## Remove a Playlist's Items

Remove one or more items from a user's playlist.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-playlist "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-modify-public%20playlist-modify-private&color=informational&style=flat)

## Get the Current User's Playlists

Get a list of the playlists owned or followed by the current Spotify user.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-read-private&color=informational&style=flat)

## Get a User's Playlists

Get a list of the playlists owned or followed by a Spotify user.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-read-private%20playlist-read-collaborative&color=informational&style=flat)

## Create a Playlist

Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=playlist-modify-public%20playlist-modify-private&color=informational&style=flat)

## Get Featured Playlists

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's _Browse_ tab).

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-featured-playlists "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=none&color=informational&style=flat)

## Get a Browse Category's Playlists

Get a list of Spotify playlists tagged with a particular category.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-categories-playlists "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=none&color=informational&style=flat)

## Get a Playlist's Cover Image

Get the current image associated with a specific playlist.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist-cover "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=none&color=informational&style=flat)

## Add a Custom Playlist Cover Image

Replace the image used to represent a specific playlist.

```ts

```

[![DOCS]](https://developer.spotify.com/documentation/web-api/reference/#/operations/upload-custom-playlist-cover "Spotify Web API Documentation")
![SCOPES](https://img.shields.io/static/v1?logo=&label=scopes&message=ugc-image-upload%20playlist-modify-public%20playlist-modify-private&color=informational&style=flat)
