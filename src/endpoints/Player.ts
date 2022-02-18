import type { RepeatState } from "../types/spotify/objects";
import type {
  Requests as req,
  Response as res,
  Endpoints as ep,
} from "../types/spotify";
import Client from "../utils/client";

export default class Player implements ep.Player {
  constructor(private client: Client) {}

  getPlaybackState(
    options?: req.GetPlaybackState
  ): Promise<res.GetPlaybackState> {
    throw new Error("Method not implemented.");
  }

  transferPlayback(
    device_id: string,
    options?: req.TransferPlayback
  ): Promise<res.TransferPlayback> {
    throw new Error("Method not implemented.");
  }

  getAvailableDevices(): Promise<res.GetAvailableDevices> {
    throw new Error("Method not implemented.");
  }

  getCurrentlyPlaying(
    options?: req.GetCurrentlyPlaying
  ): Promise<res.GetCurrentlyPlaying> {
    throw new Error("Method not implemented.");
  }

  play(options?: req.Play): Promise<res.Play> {
    throw new Error("Method not implemented.");
  }

  pause(options?: req.Pause): Promise<res.Pause> {
    throw new Error("Method not implemented.");
  }

  skipToNext(options?: req.SkipToNext): Promise<res.SkipToNext> {
    throw new Error("Method not implemented.");
  }

  skipToPrevious(options?: req.SkipToPrevious): Promise<res.SkipToPrevious> {
    throw new Error("Method not implemented.");
  }

  seek(position_ms: number, options?: req.Seek): Promise<res.Seek> {
    throw new Error("Method not implemented.");
  }

  setRepeat(
    state: RepeatState,
    options?: req.SetRepeat
  ): Promise<res.SetRepeat> {
    throw new Error("Method not implemented.");
  }

  setVolume(volume: number, options?: req.SetVolume): Promise<res.SetVolume> {
    throw new Error("Method not implemented.");
  }

  setShuffle(
    state: boolean,
    options?: req.SetShuffle
  ): Promise<res.SetShuffle> {
    throw new Error("Method not implemented.");
  }

  getRecentlyPlayed(
    options?: req.GetRecentlyPlayedTracks
  ): Promise<res.GetRecentlyPlayed> {
    throw new Error("Method not implemented.");
  }

  addToQueue(uri: string, options?: req.AddToQueue): Promise<res.AddToQueue> {
    throw new Error("Method not implemented.");
  }
}
