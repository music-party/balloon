import fetch, { SpotifyRequestConfig } from "./fetch";

export default class Client {
  constructor(public access_token: string) {}

  async get<T>(path: string, config?: SpotifyRequestConfig) {
    return fetch<T>(path, "GET", this.access_token, config);
  }

  async post<T>(path: string, config?: SpotifyRequestConfig) {
    return fetch<T>(path, "POST", this.access_token, config);
  }

  async put<T>(path: string, config?: SpotifyRequestConfig) {
    return fetch<T>(path, "PUT", this.access_token, config);
  }

  async delete<T>(path: string, config?: SpotifyRequestConfig) {
    return fetch<T>(path, "DELETE", this.access_token, config);
  }
}
