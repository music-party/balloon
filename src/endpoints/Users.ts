import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Users implements ep.Users {
  constructor(private client: Client) {}

  getCurrentUser(): Promise<res.GetCurrentUser> {
    throw new Error("Method not implemented.");
  }
  getMyTopItems(
    type: "artists" | "tracks",
    options?: req.GetMyTopItems
  ): Promise<res.GetMyTopItems> {
    throw new Error("Method not implemented.");
  }
  getUser(id: string): Promise<res.GetUser> {
    throw new Error("Method not implemented.");
  }
  followPlaylist(id: string, options?: req.FollowPlaylist): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unfollowPlaylist(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getMyFollowedArtists(
    type: "artist",
    options?: req.GetMyFollowedArtists
  ): Promise<res.GetMyFollowedArtists> {
    throw new Error("Method not implemented.");
  }
  followArtistsOrUsers(ids: string[], type: "artist" | "user"): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unfollowArtistsOrUsers(
    ids: string[],
    type: "artist" | "user"
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  isFollowingArtistsOrUsers(
    ids: string[],
    type: "artist" | "user"
  ): Promise<res.IsFollowingArtistsOrUsers> {
    throw new Error("Method not implemented.");
  }
  areFollowingPlaylist(
    playlist_id: string,
    ids: string[]
  ): Promise<res.AreFollowingPlaylist> {
    throw new Error("Method not implemented.");
  }
}
