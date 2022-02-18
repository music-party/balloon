import type { RecommendationsSeeds } from "../types/spotify/objects";
import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Tracks implements ep.Tracks {
  constructor(private client: Client) {}

  getTrack(id: string, options?: req.GetTrack): Promise<res.GetTrack> {
    throw new Error("Method not implemented.");
  }
  getTracks(ids: string[], options?: req.GetTracks): Promise<res.GetTracks> {
    throw new Error("Method not implemented.");
  }
  getMySavedTracks(
    options?: req.GetMySavedTracks
  ): Promise<res.GetMySavedTracks> {
    throw new Error("Method not implemented.");
  }
  saveTracks(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeSavedTracks(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  areTracksSaved(ids: string[]): Promise<res.AreTracksSaved> {
    throw new Error("Method not implemented.");
  }
  getTrackAudioAnalysis(id: string): Promise<res.GetTrackAudioAnalysis> {
    throw new Error("Method not implemented.");
  }
  getTrackAudioFeatures(id: string): Promise<res.GetTrackAudioFeatures> {
    throw new Error("Method not implemented.");
  }
  getTracksAudioFeatures(ids: string[]): Promise<res.GetTracksAudioFeatures> {
    throw new Error("Method not implemented.");
  }
  getRecommendations(
    seeds: RecommendationsSeeds,
    options?: req.GetRecommendations
  ): Promise<res.GetRecommendations> {
    throw new Error("Method not implemented.");
  }
}
