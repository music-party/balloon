import {
  AUDIO_ANALYSIS,
  AUDIO_FEATURES_FOR_TRACK,
  AUDIO_FEATURES_FOR_TRACKS,
  TRACK,
  TRACKS,
} from "../fixtures";
import Client from "../utils/client";
import TracksAPI from "./Tracks";

jest.mock("../utils/client");
const ClientMock = Client as jest.MockedClass<typeof Client>;
const client = new ClientMock("token");
const tracks = new TracksAPI(client);

describe("Tracks", () => {
  describe("Get Track", () => {});
  describe("Get Several Tracks", () => {});
  describe("Get User's Saved Tracks", () => {});
  describe("Save Tracks for Current User", () => {});
  describe("Get Track", () => {});
});

describe("Tracks", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Get Track", () => {
    beforeEach(() => {
      ClientMock.prototype.get.mockResolvedValue(TRACK);
    });

    it("without options", async () => {
      const res = await tracks.getTrack("foo");

      expect(res).toEqual(TRACK);
      expect(client.get).toBeCalledWith("/tracks/foo", undefined);
    });

    it("with options", async () => {
      const res = await tracks.getTrack("foo", { market: "bar" });

      expect(res).toEqual(TRACK);
      expect(client.get).toBeCalledWith("/tracks/foo", {
        params: { market: "bar" },
      });
    });
  });

  describe("Get Several Tracks", () => {
    beforeEach(() => {
      ClientMock.prototype.get.mockResolvedValue({ tracks: TRACKS });
    });

    it("without options", async () => {
      const res = await tracks.getTracks(["foo", "bar"]);

      expect(res).toEqual(TRACKS);
      expect(client.get).toBeCalledWith("/tracks", {
        params: { ids: ["foo", "bar"] },
      });
    });

    it("with options", async () => {
      const res = await tracks.getTracks(["foo", "bar"], { market: "baz" });

      expect(res).toEqual(TRACKS);
      expect(client.get).toBeCalledWith("/tracks", {
        params: { ids: ["foo", "bar"], market: "baz" },
      });
    });
  });

  it("Get Track's Audio Features", async () => {
    ClientMock.prototype.get.mockResolvedValue(AUDIO_FEATURES_FOR_TRACK);

    const res = await tracks.getAudioFeaturesForTrack("foo");

    expect(res).toEqual(AUDIO_FEATURES_FOR_TRACK);
    expect(client.get).toBeCalledWith("/audio-features/foo");
  });

  it("Get Tracks' Audio Features", async () => {
    ClientMock.prototype.get.mockResolvedValue({
      audio_features: AUDIO_FEATURES_FOR_TRACKS,
    });

    const res = await tracks.getAudioFeaturesForTracks(["foo", "bar"]);

    expect(res).toEqual(AUDIO_FEATURES_FOR_TRACKS);
    expect(client.get).toBeCalledWith("/audio-features", {
      params: { ids: ["foo", "bar"] },
    });
  });

  it("Get Track's Audio Analysis", async () => {
    ClientMock.prototype.get.mockResolvedValue(AUDIO_ANALYSIS);

    const res = await tracks.getAudioAnalysisForTrack("foo");

    expect(res).toEqual(AUDIO_ANALYSIS);
    expect(client.get).toBeCalledWith("/audio-analysis/foo");
  });
});
