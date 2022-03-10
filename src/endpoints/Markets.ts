import type { Req as req, Res as res, Endpoints as ep } from "../types/spotify";
import Client from "../utils/client";

export default class Markets implements ep.Markets {
  constructor(private client: Client) {}

  getAvailableMarkets(): Promise<res.GetAvailableMarkets> {
    throw new Error("Method not implemented.");
  }
}
