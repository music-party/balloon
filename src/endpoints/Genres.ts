import type { Req as req, Res as res, Endpoints as ep } from "../types/spotify";
import Client from "../utils/client";

export default class Genres implements ep.Genres {
  constructor(private client: Client) {}

  getAvailableGenreSeeds(): Promise<res.GetAvailableGenreSeeds> {
    throw new Error("Method not implemented.");
  }
}
