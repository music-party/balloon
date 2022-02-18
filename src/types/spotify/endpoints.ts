import { Requests as req, Response as res } from ".";
import {
  RecommendationsSeeds,
  ReorderPlaylistItems,
  RepeatState,
  ReplacePlaylistItems,
  SearchType,
} from "./objects";

export interface Albums {
  getAlbum(id: string, options?: req.GetAlbum): Promise<res.GetAlbum>;
  getAlbums(ids: string[], options?: req.GetAlbums): Promise<res.GetAlbums>;
  getAlbumTracks(
    id: string,
    options?: req.GetAlbumTracks
  ): Promise<res.GetAlbumTracks>;
  getMySavedAlbums(
    options?: req.GetMySavedAlbums
  ): Promise<res.GetMySavedAlbums>;
  saveAlbums(ids: string[]): Promise<res.SaveAlbums>;
  removeMySavedAlbums(ids: string[]): Promise<res.RemoveMySavedAlbums>;
  areAlbumsSaved(ids: string[]): Promise<res.AreAlbumsSaved>;
  getNewReleases(options?: req.GetNewReleases): Promise<res.GetNewReleases>;
}

export interface Artists {
  getArtist(id: string): Promise<res.GetArtist>;
  getArtists(ids: string[]): Promise<res.GetArtists>;
  getArtistAlbums(
    id: string,
    options?: req.GetArtistAlbums
  ): Promise<res.GetArtistAlbums>;
  getArtistTopTracks(
    id: string,
    options?: req.GetArtistTopTracks
  ): Promise<res.GetArtistTopTracks>;
  getRelatedArtists(id: string): Promise<res.GetRelatedArtists>;
}

export interface Categories {
  getCategory(id: string, options?: req.GetCategory): Promise<res.GetCategory>;
  getCategories(options?: req.GetCategories): Promise<res.GetCategories>;
}

export interface Episodes {
  getEpisode(id: string, options?: req.GetEpisode): Promise<res.GetEpisode>;
  getEpisodes(
    ids: string[],
    options?: req.GetEpisodes
  ): Promise<res.GetEpisodes>;
  getMySavedEpisodes(
    options?: req.GetMySavedEpisodes
  ): Promise<res.GetMySavedEpisodes>;
  saveEpisodes(ids: string[]): Promise<res.SaveEpisodes>;
  removeMySavedEpisodes(ids: string[]): Promise<res.RemoveMySavedEpisodes>;
  areEpisodesSaved(ids: string[]): Promise<res.AreEpisodesSaved>;
}

export interface Genres {
  getAvailableGenreSeeds(): Promise<res.GetAvailableGenreSeeds>;
}

export interface Markets {
  getAvailableMarkets(): Promise<res.GetAvailableMarkets>;
}

export interface Player {
  getPlaybackState(
    options?: req.GetPlaybackState
  ): Promise<res.GetPlaybackState>;
  transferPlayback(
    device_id: string,
    options?: req.TransferPlayback
  ): Promise<res.TransferPlayback>;
  getAvailableDevices(): Promise<res.GetAvailableDevices>;
  getCurrentlyPlaying(
    options?: req.GetCurrentlyPlaying
  ): Promise<res.GetCurrentlyPlaying>;
  play(options?: req.Play): Promise<res.Play>;
  pause(options?: req.Pause): Promise<res.Pause>;
  skipToNext(options?: req.SkipToNext): Promise<res.SkipToNext>;
  skipToPrevious(options?: req.SkipToPrevious): Promise<res.SkipToPrevious>;
  seek(position_ms: number, options?: req.Seek): Promise<res.Seek>;
  setRepeat(
    state: RepeatState,
    options?: req.SetRepeat
  ): Promise<res.SetRepeat>;
  setVolume(volume: number, options?: req.SetVolume): Promise<res.SetVolume>;
  setShuffle(state: boolean, options?: req.SetShuffle): Promise<res.SetShuffle>;
  getRecentlyPlayed(
    options?: req.GetRecentlyPlayedTracks
  ): Promise<res.GetRecentlyPlayed>;
  addToQueue(uri: string, options?: req.AddToQueue): Promise<res.AddToQueue>;
}

export interface Playlists {
  getPlaylist(id: string, options?: req.GetPlaylist): Promise<res.GetPlaylist>;
  changePlaylistDetails(
    id: string,
    options?: req.ChangePlaylistDetails
  ): Promise<res.ChangePlaylistDetails>;
  getPlaylistItems(
    id: string,
    options?: req.GetPlaylistItems
  ): Promise<res.GetPlaylistItems>;
  addItemsToPlaylist(
    id: string,
    uris: string[],
    options?: req.AddItemsToPlaylist
  ): Promise<res.AddItemsToPlaylist>;
  updatePlaylistItems(
    id: string,
    options: ReorderPlaylistItems | ReplacePlaylistItems
  ): Promise<res.UpdatePlaylistItems>;
  removePlaylistItems(
    id: string,
    uris: string[],
    options?: req.RemovePlaylistItems
  ): Promise<res.RemovePlaylistItems>;
  getMyPlaylists(options?: req.GetMyPlaylists): Promise<res.GetMyPlaylists>;
  getUserPlaylists(
    id: string,
    options?: req.GetUserPlaylists
  ): Promise<res.GetUserPlaylists>;
  createPlaylist(
    user_id: string,
    name: string,
    options?: req.CreatePlaylist
  ): Promise<res.CreatePlaylist>;
  getFeaturedPlaylists(
    options?: req.GetFeaturedPlaylists
  ): Promise<res.GetFeaturedPlaylists>;
  getCategoryPlaylists(
    id: string,
    options?: req.GetCategoryPlaylists
  ): Promise<res.GetCategoryPlaylists>;
  getPlaylistImage(id: string): Promise<res.GetPlaylistImage>;
  addPlaylistImage(id: string, image: string): Promise<res.AddPlaylistImage>;
}

export interface Search {
  search(
    query: string,
    types: SearchType[],
    options?: req.Search
  ): Promise<res.Search>;
}

export interface Shows {
  getShow(id: string, options?: req.GetShow): Promise<res.GetShow>;
  getShows(ids: string[], options?: req.GetShows): Promise<res.GetShows>;
  getShowEpisodes(
    id: string,
    options?: req.GetShowEpisodes
  ): Promise<res.GetShowEpisodes>;
  getMySavedShows(options?: req.GetMySavedShows): Promise<res.GetMySavedShows>;
  saveShows(ids: string[]): Promise<res.SaveShows>;
  removeMySavedShows(
    ids: string[],
    options?: req.RemoveMySavedShows
  ): Promise<res.RemoveMySavedShows>;
  areShowsSaved(ids: string[]): Promise<res.AreShowsSaved>;
}

export interface Tracks {
  getTrack(id: string, options?: req.GetTrack): Promise<res.GetTrack>;
  getTracks(ids: string[], options?: req.GetTracks): Promise<res.GetTracks>;
  getMySavedTracks(
    options?: req.GetMySavedTracks
  ): Promise<res.GetMySavedTracks>;
  saveTracks(ids: string[]): Promise<res.SaveTracks>;
  removeSavedTracks(ids: string[]): Promise<res.RemoveMySavedTracks>;
  areTracksSaved(ids: string[]): Promise<res.AreTracksSaved>;
  getTrackAudioAnalysis(id: string): Promise<res.GetTrackAudioAnalysis>;
  getTrackAudioFeatures(id: string): Promise<res.GetTrackAudioFeatures>;
  getTracksAudioFeatures(ids: string[]): Promise<res.GetTracksAudioFeatures>;
  getRecommendations(
    seeds: RecommendationsSeeds,
    options?: req.GetRecommendations
  ): Promise<res.GetRecommendations>;
}

export interface Users {
  getCurrentUser(): Promise<res.GetCurrentUser>;
  getMyTopItems(
    type: "artists" | "tracks",
    options?: req.GetMyTopItems
  ): Promise<res.GetMyTopItems>;
  getUser(id: string): Promise<res.GetUser>;
  followPlaylist(
    id: string,
    options?: req.FollowPlaylist
  ): Promise<res.FollowPlaylist>;
  unfollowPlaylist(id: string): Promise<res.UnfollowPlaylist>;
  getMyFollowedArtists(
    type: "artist",
    options?: req.GetMyFollowedArtists
  ): Promise<res.GetMyFollowedArtists>;
  followArtistsOrUsers(
    ids: string[],
    type: "artist" | "user"
  ): Promise<res.FollowArtistsOrUsers>;
  unfollowArtistsOrUsers(
    ids: string[],
    type: "artist" | "user"
  ): Promise<res.UnFollowArtistsOrUsers>;
  isFollowingArtistsOrUsers(
    ids: string[],
    type: "artist" | "user"
  ): Promise<res.IsFollowingArtistsOrUsers>;
  areFollowingPlaylist(
    playlist_id: string,
    ids: string[]
  ): Promise<res.AreFollowingPlaylist>;
}
