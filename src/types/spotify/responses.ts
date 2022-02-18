// types for responses from Spotify Web API endpoints

import * as spotify from "./objects";

// #region AUTH
export type GetAppToken = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
};
export type GetUserTokens = {
  access_token: string;
  token_type: "Bearer";
  scope: string;
  expires_in: number;
  refresh_token: string;
};
export type RefreshAccessToken = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
};
// #endregion

// #region ALBUMS
export type GetAlbum = spotify.Album;
export type GetAlbums = { albums: spotify.Album[] };
export type GetAlbumTracks = spotify.Paging<spotify.SimplifiedTrack>;
export type GetMySavedAlbums = spotify.Paging<spotify.SavedAlbum>;
export type SaveAlbums = void;
export type RemoveMySavedAlbums = void;
export type AreAlbumsSaved = boolean[];
export type GetNewReleases = {
  albums: spotify.Paging<spotify.SimplifiedAlbum>;
};
// #endregion

// #region ARTISTS
export type GetArtist = spotify.Artist;
export type GetArtists = { artists: spotify.Artist[] };
export type GetArtistAlbums = spotify.Paging<spotify.SimplifiedAlbum>;
export type GetArtistTopTracks = { tracks: spotify.Track[] };
export type GetRelatedArtists = { artists: spotify.Artist[] };
// #endregion

// #region CATEGORIES
export type GetCategory = spotify.Category;
export type GetCategories = { categories: spotify.Paging<spotify.Category> };
// #endregion

// #region EPISODES
export type GetEpisode = spotify.Episode;
export type GetEpisodes = { episodes: spotify.Episode[] };
export type GetMySavedEpisodes = spotify.Paging<spotify.SavedEpisode>;
export type SaveEpisodes = void;
export type RemoveMySavedEpisodes = void;
export type AreEpisodesSaved = boolean[];
// #endregion

// #region GENRES
export type GetAvailableGenreSeeds = { genres: string[] };
// #endregion

// #region MARKETS
export type GetAvailableMarkets = { markets: string[] };
// #endregion

// #region PLAYER
export type GetPlaybackState = spotify.PlaybackState;
export type TransferPlayback = void;
export type GetAvailableDevices = { devices: spotify.Device[] };
export type GetCurrentlyPlaying = spotify.CurrentlyPlaying;
export type Play = void;
export type Pause = void;
export type SkipToNext = void;
export type SkipToPrevious = void;
export type Seek = void;
export type SetRepeat = void;
export type SetVolume = void;
export type SetShuffle = void;
export type GetRecentlyPlayed = spotify.CursorBasedPaging<spotify.PlayHistory>;
export type AddToQueue = void;
// #endregion

// #region PLAYLISTS
export type GetPlaylist = spotify.Playlist;
export type ChangePlaylistDetails = void;
export type GetPlaylistItems = spotify.Paging<spotify.PlaylistItem>;
export type AddItemsToPlaylist = { snapshot_id: string };
export type UpdatePlaylistItems = { snapshot_id: string };
export type RemovePlaylistItems = { snapshot_id: string };
export type GetMyPlaylists = spotify.Paging<spotify.SimplifiedPlaylist>;
export type GetUserPlaylists = spotify.Paging<spotify.SimplifiedPlaylist>;
export type CreatePlaylist = spotify.Playlist;
export type GetFeaturedPlaylists = spotify.FeaturedPlaylists;
export type GetCategoryPlaylists = {
  playlists: spotify.Paging<spotify.SimplifiedPlaylist>;
};
export type GetPlaylistImage = spotify.Image[];
export type AddPlaylistImage = void;
// #endregion

// #region SEARCH
export type SearchAlbums = { albums: spotify.Paging<spotify.SimplifiedAlbum> };
export type SearchArtists = { artists: spotify.Paging<spotify.Artist> };
export type SearchEpisodes = {
  episodes: spotify.Paging<spotify.SimplifiedEpisode>;
};
export type SearchPlaylists = {
  playlists: spotify.Paging<spotify.SimplifiedPlaylist>;
};
export type SearchShows = { shows: spotify.Paging<spotify.SimplifiedShow> };
export type SearchTracks = { tracks: spotify.Paging<spotify.Track> };
export type Search = Partial<
  SearchAlbums &
    SearchArtists &
    SearchEpisodes &
    SearchPlaylists &
    SearchShows &
    SearchTracks
>;
// #endregion

// #region SHOWS
export type GetShow = spotify.Show;
export type GetShows = { shows: spotify.SimplifiedShow[] };
export type GetShowEpisodes = spotify.Paging<spotify.SimplifiedEpisode>;
export type GetMySavedShows = spotify.Paging<spotify.SavedShow>;
export type SaveShows = void;
export type RemoveMySavedShows = void;
export type AreShowsSaved = boolean[];
// #endregion

// #region TRACKS
export type GetTrack = spotify.Track;
export type GetTracks = { tracks: spotify.Track[] };
export type GetMySavedTracks = spotify.Paging<spotify.SavedTrack>;
export type SaveTracks = void;
export type RemoveMySavedTracks = void;
export type AreTracksSaved = boolean[];
export type GetTrackAudioAnalysis = spotify.AudioAnalysis;
export type GetTrackAudioFeatures = spotify.AudioFeatures;
export type GetTracksAudioFeatures = {
  audio_features: spotify.AudioFeatures[];
};
export type GetRecommendations = spotify.Recommendations;
// #endregion

// #region USERS
export type GetCurrentUser = spotify.PrivateUser;
export type GetMyTopItems =
  | spotify.Paging<spotify.Artist>
  | spotify.Paging<spotify.Track>;
// export type GetMyTopArtists = Paging<Artist>;
// export type GetMyTopTracks = Paging<Track>;
export type GetUser = spotify.PublicUser;
export type FollowPlaylist = void;
export type UnfollowPlaylist = void;
export type GetMyFollowedArtists = {
  artists: spotify.CursorBasedPaging<spotify.Artist>;
};
export type FollowArtistsOrUsers = void;
// export type FollowArtists = void;
// export type FollowUsers = void;
export type UnFollowArtistsOrUsers = void;
// export type UnfollowArtists = void;
// export type UnfollowUsers = void;
export type IsFollowingArtistsOrUsers = boolean[];
// export type IsFollowingArtist = boolean[];
// export type IsFollowingUsers = boolean[];
export type AreFollowingPlaylist = boolean[];
// #endregion
