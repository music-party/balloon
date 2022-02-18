import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Artists implements ep.Artists {
  constructor(private client: Client) {}

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist)
   */
  async getArtist(id: string): Promise<res.GetArtist> {
    return await this.client.get<res.GetArtist>(`/artists/${id}`);
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-artists)
   */
  async getArtists(ids: string[]): Promise<res.GetArtists> {
    return await this.client.get<res.GetArtists>(`/artists`, {
      params: { ids },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums)
   */
  async getArtistAlbums(
    id: string,
    options?: req.GetArtistAlbums
  ): Promise<res.GetArtistAlbums> {
    return await this.client.get<res.GetArtistAlbums>(
      `/artists/${id}/albums`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-top-tracks)
   */
  async getArtistTopTracks(
    id: string,
    options?: req.GetArtistTopTracks
  ): Promise<res.GetArtistTopTracks> {
    return await this.client.get<res.GetArtistTopTracks>(
      `/artists/${id}/top-tracks`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-related-artists)
   */
  async getRelatedArtists(id: string): Promise<res.GetRelatedArtists> {
    return await this.client.get<res.GetRelatedArtists>(
      `/artists/${id}/related-artists`
    );
  }
}
