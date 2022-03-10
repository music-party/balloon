import type { Req as req, Res as res, Endpoints as ep } from "../types/spotify";
import Client from "../utils/client";

export default class Episodes implements ep.Episodes {
  constructor(private client: Client) {}

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-episode)
   */
  async getEpisode(
    id: string,
    options?: req.GetEpisode
  ): Promise<res.GetEpisode> {
    return await this.client.get<res.GetEpisode>(
      `/episodes/${id}`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-episodes)
   */
  async getEpisodes(
    ids: string[],
    options?: req.GetEpisodes
  ): Promise<res.GetEpisodes> {
    return await this.client.get<res.GetEpisodes>(`/episodes`, {
      params: { ids, ...options },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-episodes)
   */
  async getMySavedEpisodes(
    options?: req.GetMySavedEpisodes
  ): Promise<res.GetMySavedEpisodes> {
    return await this.client.get<res.GetMySavedEpisodes>(
      `/me/episodes`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/save-episodes-user)
   */
  async saveEpisodes(ids: string[]): Promise<res.SaveEpisodes> {
    return await this.client.put<res.SaveEpisodes>(`/me/episodes`, {
      params: { ids },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-episodes-user)
   */
  async removeMySavedEpisodes(
    ids: string[]
  ): Promise<res.RemoveMySavedEpisodes> {
    return await this.client.delete<res.RemoveMySavedEpisodes>(`/me/episodes`, {
      params: { ids },
    });
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-episodes)
   */
  async areEpisodesSaved(ids: string[]): Promise<res.AreEpisodesSaved> {
    return await this.client.get<res.AreEpisodesSaved>(`me/episodes/contains`, {
      params: { ids },
    });
  }
}
