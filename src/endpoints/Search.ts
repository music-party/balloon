import type { SearchType } from "../types/spotify/objects";
import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Search implements ep.Search {
  constructor(private client: Client) {}

  search(
    query: string,
    types: SearchType[],
    options?: req.Search
  ): Promise<res.Search> {
    throw new Error("Method not implemented.");
  }
}
