import type { Req as req, Res as res, Endpoints as ep } from "../types/spotify";
import Client from "../utils/client";

export default class Shows implements ep.Shows {
  constructor(private client: Client) {}

  getShow(id: string, options?: req.GetShow): Promise<res.GetShow> {
    throw new Error("Method not implemented.");
  }
  getShows(ids: string[], options?: req.GetShows): Promise<res.GetShows> {
    throw new Error("Method not implemented.");
  }
  getShowEpisodes(
    id: string,
    options?: req.GetShowEpisodes
  ): Promise<res.GetShowEpisodes> {
    throw new Error("Method not implemented.");
  }
  getMySavedShows(options?: req.GetMySavedShows): Promise<res.GetMySavedShows> {
    throw new Error("Method not implemented.");
  }
  saveShows(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeMySavedShows(
    ids: string[],
    options?: req.RemoveMySavedShows
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  areShowsSaved(ids: string[]): Promise<res.AreShowsSaved> {
    throw new Error("Method not implemented.");
  }
}
