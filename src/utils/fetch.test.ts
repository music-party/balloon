import axios from "axios";
import { SPOTIFY_BASE_API_URL } from "./constants";
import fetch, { paramsSerializer } from "./fetch";

jest.mock("axios");
const axiosMock = axios as unknown as jest.Mock;

describe("fetch", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Content-Type header", () => {
    beforeEach(() => {
      axiosMock.mockResolvedValue({ data: "foo" });
    });

    it("default", async () => {
      await fetch("foo", "GET", "token", { params: { bar: "baz" } });
      expect(axiosMock).toBeCalledWith({
        params: { bar: "baz" },
        baseURL: SPOTIFY_BASE_API_URL,
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json",
        },
        url: "foo",
        method: "GET",
        paramsSerializer,
      });
    });

    it("custom", async () => {
      await fetch("foo", "GET", "token", {
        contentType: "image/jpeg",
        data: "bar",
      });
      expect(axiosMock).toBeCalledWith({
        data: "bar",
        baseURL: SPOTIFY_BASE_API_URL,
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "image/jpeg",
        },
        url: "foo",
        method: "GET",
        paramsSerializer,
      });
    });
  });

  describe("Error handling", () => {
    it("error", async () => {
      // const error = ;
      // axiosMock.mockRejectedValue({ message: "foo" });
      await expect(fetch("/me", "GET", "token")).rejects.toThrow("foo");
    });
  });

  describe("paramsSerializer", () => {
    it("comma array format", () => {
      const params = paramsSerializer({ foo: ["bar", "baz"] });
      expect(params).toEqual("foo=bar%2Cbaz");
    });
  });
});
