import type {
  ReorderPlaylistItems,
  ReplacePlaylistItems,
} from "../types/spotify/objects";
import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Playlists implements ep.Playlists {
  constructor(private client: Client) {}
  getPlaylist(id: string, options?: req.GetPlaylist): Promise<res.GetPlaylist> {
    throw new Error("Method not implemented.");
  }
  changePlaylistDetails(
    id: string,
    options?: req.ChangePlaylistDetails
  ): Promise<res.ChangePlaylistDetails> {
    throw new Error("Method not implemented.");
  }
  getPlaylistItems(
    id: string,
    options?: req.GetPlaylistItems
  ): Promise<res.GetPlaylistItems> {
    throw new Error("Method not implemented.");
  }
  addItemsToPlaylist(
    id: string,
    uris: string[],
    options?: req.AddItemsToPlaylist
  ): Promise<res.AddItemsToPlaylist> {
    throw new Error("Method not implemented.");
  }
  updatePlaylistItems(
    id: string,
    options: ReorderPlaylistItems | ReplacePlaylistItems
  ): Promise<res.UpdatePlaylistItems> {
    throw new Error("Method not implemented.");
  }
  removePlaylistItems(
    id: string,
    uris: string[],
    options?: req.RemovePlaylistItems
  ): Promise<res.RemovePlaylistItems> {
    throw new Error("Method not implemented.");
  }
  getMyPlaylists(options?: req.GetMyPlaylists): Promise<res.GetMyPlaylists> {
    throw new Error("Method not implemented.");
  }
  getUserPlaylists(
    id: string,
    options?: req.GetUserPlaylists
  ): Promise<res.GetUserPlaylists> {
    throw new Error("Method not implemented.");
  }
  createPlaylist(
    user_id: string,
    name: string,
    options?: req.CreatePlaylist
  ): Promise<res.CreatePlaylist> {
    throw new Error("Method not implemented.");
  }
  getFeaturedPlaylists(
    options?: req.GetFeaturedPlaylists
  ): Promise<res.GetFeaturedPlaylists> {
    throw new Error("Method not implemented.");
  }
  getCategoryPlaylists(
    id: string,
    options?: req.GetCategoryPlaylists
  ): Promise<res.GetCategoryPlaylists> {
    throw new Error("Method not implemented.");
  }
  getPlaylistImage(id: string): Promise<res.GetPlaylistImage> {
    throw new Error("Method not implemented.");
  }
  addPlaylistImage(id: string, image: string): Promise<res.AddPlaylistImage> {
    throw new Error("Method not implemented.");
  }
}
