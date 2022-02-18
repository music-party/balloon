import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Albums implements ep.Albums {
  constructor(private client: Client) {}

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-album)
   */
  async getAlbum(id: string, options?: req.GetAlbum): Promise<res.GetAlbum> {
    return await this.client.get<res.GetAlbum>(
      `/albums/${id}`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-albums)
   */
  async getAlbums(
    ids: string[],
    options?: req.GetAlbums
  ): Promise<res.GetAlbums> {
    return await this.client.get<res.GetAlbums>(`/albums`, {
      params: { ids, ...options },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks)
   */
  async getAlbumTracks(
    id: string,
    options?: req.GetAlbumTracks
  ): Promise<res.GetAlbumTracks> {
    return await this.client.get<res.GetAlbumTracks>(
      `/albums/${id}/tracks`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums)
   */
  async getMySavedAlbums(
    options?: req.GetMySavedAlbums
  ): Promise<res.GetMySavedAlbums> {
    return await this.client.get<res.GetMySavedAlbums>(
      `/me/albums`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/save-albums-user)
   */
  async saveAlbums(ids: string[]): Promise<res.SaveAlbums> {
    return await this.client.put<res.SaveAlbums>(`/me/albums`, {
      data: { ids },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-albums-user)
   */
  async removeMySavedAlbums(ids: string[]): Promise<res.RemoveMySavedAlbums> {
    return await this.client.delete<res.RemoveMySavedAlbums>(`/me/albums`, {
      data: { ids },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-albums)
   */
  async areAlbumsSaved(ids: string[]): Promise<res.AreAlbumsSaved> {
    return await this.client.get<res.AreAlbumsSaved>(`/me/albums/contains`, {
      params: { ids },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-new-releases)
   */
  async getNewReleases(
    options?: req.GetNewReleases
  ): Promise<res.GetNewReleases> {
    return await this.client.get<res.GetNewReleases>(
      `/browse/new-releases`,
      options && { params: options }
    );
  }
}
