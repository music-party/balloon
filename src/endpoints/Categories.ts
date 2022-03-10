import type { Req as req, Res as res, Endpoints as ep } from "../types/spotify";
import Client from "../utils/client";

export default class Categories implements ep.Categories {
  constructor(private client: Client) {}

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-category)
   */
  async getCategory(
    id: string,
    options?: req.GetCategory
  ): Promise<res.GetCategory> {
    return await this.client.get<res.GetCategory>(
      `/browse/categories/${id}`,
      options && { params: options }
    );
  }

  /**
   * [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-categories)
   */
  async getCategories(options?: req.GetCategories): Promise<res.GetCategories> {
    return await this.client.get<res.GetCategories>(
      `browse/categories`,
      options && { params: options }
    );
  }
}
