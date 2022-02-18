// types for optional request parameters

// #region ALBUMS
export type GetAlbum = { market?: string };
export type GetAlbums = { market?: string };
export type GetAlbumTracks = {
  limit?: number;
  offset?: number;
  market?: string;
};
export type GetMySavedAlbums = {
  limit?: number;
  offset?: number;
  market?: string;
};
// SaveAlbums - no optional request parameters
// RemoveMySavedAlbums - no optional request parameters
// AreAlbumsSaved - no optional request parameters
export type GetNewReleases = {
  country?: string;
  limit?: number;
  offset?: number;
};
// #endregion

// #region ARTISTS
// GetArtist - no optional request parameters
// GetArtists - no optional request parameters
export type GetArtistAlbums = {
  include_groups?: Array<"album" | "single" | "appears_on" | "compilation">;
  country?: string;
  limit?: number;
  offset?: number;
};
export type GetArtistTopTracks = { market?: string };
// GetRelatedArtists - no optional request parameters
// #endregion

// #region CATEGORIES
export type GetCategory = {
  country?: string;
  locale?: string;
};
export type GetCategories = {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
};
// #endregion

// #region EPISODES
export type GetEpisode = { market?: string };
export type GetEpisodes = { market?: string };
export type GetMySavedEpisodes = {
  limit?: number;
  offset?: number;
  market?: string;
};
// SaveEpisodes - no optional request parameters
// RemoveMySavedEpisodes - no optional request parameters
// AreEpisodesSaved - no optional request parameters
// #endregion

// #region GENRES
// GetArtists - no optional request parameters
// #endregion

// #region MARKETS
// GetAvailableMarkets - no optional request parameters
// #endregion

// #region PLAYER
export type GetPlaybackState = {
  additional_types?: Array<"track" | "episode">;
  market?: string;
};
export type TransferPlayback = { play?: boolean };
// GetAvailableDevices - no optional request parameters
export type GetCurrentlyPlaying = {
  additional_types?: Array<"track" | "episode">;
  market?: string;
};
export type Play = {
  device_id?: string;
  context_uri?: string;
  uris?: string[];
  offset?: { position: number } | { uri: string };
  position_ms?: number;
};
export type Pause = { device_id?: string };
export type SkipToNext = { device_id?: string };
export type SkipToPrevious = { device_id?: string };
export type Seek = { device_id?: string };
export type SetRepeat = { device_id?: string };
export type SetVolume = { device_id?: string };
export type SetShuffle = { device_id?: string };
export type GetRecentlyPlayedTracks = {
  after?: number;
  before?: number;
  limit?: number;
};
export type AddToQueue = { device_id?: string };
// #endregion

// #region PLAYLISTS
export type GetPlaylist = {
  additional_types?: Array<"track" | "episode">;
  fields?: string;
  market?: string;
};
export type ChangePlaylistDetails = {
  name?: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
};
export type GetPlaylistItems = {
  additional_types?: Array<"track" | "episode">;
  fields?: string;
  limit?: number;
  offset?: number;
  market?: string;
};
export type AddItemsToPlaylist = { position?: number };
export type RemovePlaylistItems = { snapshot_id: string };
export type GetMyPlaylists = {
  limit?: number;
  offset?: number;
};
export type GetUserPlaylists = {
  limit?: number;
  offset?: number;
};
export type CreatePlaylist = {
  public?: boolean;
  collaborative?: boolean;
  description?: string;
};
export type GetFeaturedPlaylists = {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
};
export type GetCategoryPlaylists = {
  country?: string;
  limit?: number;
  offset?: number;
};
// GetPlaylistImage - no optional request parameters
// AddPlaylistImage - no optional request parameters
// #endregion

// #region SEARCH
export type Search = {
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: "audio";
};
// #endregion

// #region SHOWS
export type GetShow = { market?: string };
export type GetShows = { market?: string };
export type GetShowEpisodes = {
  limit?: number;
  offset?: number;
  market?: string;
};
export type GetMySavedShows = {
  limit?: number;
  offset?: number;
};
// SaveShows - no optional request parameters
export type RemoveMySavedShows = { market?: string };
// AreShowsSaved - no optional request parameters
// #endregion

// #region TRACKS
export type GetTrack = { market?: string };
export type GetTracks = {
  market?: string;
};
export type GetMySavedTracks = {
  limit?: number;
  offset?: number;
  market?: string;
};
// SaveTracks - no optional request parameters
// RemoveMySavedTracks - no optional request parameters
// AreTracksSaved - no optional request parameters
// GetTrackAudioAnalysis - no optional request parameters
// GetTrackAudioFeatures - no optional request parameters
// GetTracksAudioFeatures - no optional request parameters
export type GetRecommendations = {
  limit?: number;
  market?: string;
  max_acousticness?: number;
  max_danceability?: number;
  max_duration_ms?: number;
  max_energy?: number;
  max_instrumentalness?: number;
  max_key?: number;
  max_liveness?: number;
  max_loudness?: number;
  max_mode?: number;
  max_popularity?: number;
  max_speechiness?: number;
  max_tempo?: number;
  max_time_signature?: number;
  max_valence?: number;
  min_acousticness?: number;
  min_danceability?: number;
  min_duration_ms?: number;
  min_energy?: number;
  min_instrumentalness?: number;
  min_key?: number;
  min_liveness?: number;
  min_loudness?: number;
  min_mode?: number;
  min_popularity?: number;
  min_speechiness?: number;
  min_tempo?: number;
  min_time_signature?: number;
  min_valence?: number;
  target_acousticness?: number;
  target_danceability?: number;
  target_duration_ms?: number;
  target_energy?: number;
  target_instrumentalness?: number;
  target_key?: number;
  target_liveness?: number;
  target_loudness?: number;
  target_mode?: number;
  target_popularity?: number;
  target_speechiness?: number;
  target_tempo?: number;
  target_time_signature?: number;
  target_valence?: number;
};
// #endregion

// #region USERS
// GetCurrentUser - no optional request parameters
export type GetMyTopItems = {
  limit?: number;
  offset?: number;
  time_range?: "long_term" | "medium_term" | "short_term";
};
// GetUser - no optional request parameters
export type FollowPlaylist = { public?: boolean };
// UnfollowPlaylist - no optional request parameters
export type GetMyFollowedArtists = {
  after?: string;
  limit?: number;
};
// FollowArtistsOrUsers - no optional request parameters
// UnfollowArtistsOrUsers - no optional request parameters
// IsFollowingArtistsOrUsers - no optional request parameters
// AreFollowingPlaylist - no optional request parameters
// #endregion
