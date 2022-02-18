import axios from "axios";
import { stringify } from "qs";
import { SPOTIFY_TOKEN_URL } from "./utils/constants";
import Client from "./utils/client";
import { encodeBase64, generateRandomString } from "./utils/strings";
import UsersAPI from "./endpoints/Users";
import { Objects as obj, Response as res } from "./types/spotify";

type CreateAuthorizationUrlOptions = {
  state?: string;
  show_dialog?: boolean;
};

type AllOrNothing<T> = T | Partial<Record<keyof T, undefined>>;

type SpotifyApiOptions = {
  access_token?: string;
  refresh_token?: string;
} & AllOrNothing<{
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  scope?: obj.AuthorizationScope[];
}>;

export default class SpotifyApi {
  private refresh_token?: string;
  private client_id?: string;
  private client_secret?: string;
  private redirect_uri?: string;
  private scope?: obj.AuthorizationScope[];

  private client: Client;

  public users: UsersAPI;

  constructor({
    access_token,
    refresh_token,
    client_id,
    client_secret,
    redirect_uri,
    scope,
  }: SpotifyApiOptions) {
    this.refresh_token = refresh_token;
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.redirect_uri = redirect_uri;
    this.scope = scope;

    this.client = new Client(access_token ?? "");

    this.users = new UsersAPI(this.client);
  }

  get access_token() {
    return this.client.access_token;
  }

  set access_token(token: string) {
    this.client.access_token = token;
  }

  private createAuthorizationUrl(
    response_type: "code" | "token",
    options: CreateAuthorizationUrlOptions = {}
  ) {
    if (!this.client_id || !this.redirect_uri)
      throw new Error("Authorization URL requires client_id and redirect_uri");

    if (!options.state) options.state = generateRandomString(16);
    return {
      url:
        "https://accounts.spotify.com/authorize?" +
        stringify({
          client_id: this.client_id,
          response_type,
          redirect_uri: this.redirect_uri,
          scope: this.scope?.join(" "),
          ...options,
        }),
      state: options.state,
    };
  }

  public createRefreshableAuthorizationUrl(
    options?: CreateAuthorizationUrlOptions
  ) {
    return this.createAuthorizationUrl("code", options);
  }

  public createTemporaryAuthorizationUrl(
    options?: CreateAuthorizationUrlOptions
  ) {
    return this.createAuthorizationUrl("token", options);
  }

  public async getApplicationToken() {
    if (!this.client_id || !this.client_secret)
      throw new Error(
        "Client Credentials Flow requires client_id and client_secret"
      );

    const response = await axios.post<res.GetAppToken>(
      SPOTIFY_TOKEN_URL,
      stringify({ grant_type: "client_credentials" }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodeBase64(
            `${this.client_id}:${this.client_secret}`
          )}`,
        },
      }
    );

    return response.data;
  }

  public async getUserTokens(code: string) {
    if (!this.client_id || !this.client_secret || !this.redirect_uri)
      throw new Error(
        "Fetching user tokens requires client_id, client_secret, and redirect_uri"
      );

    const response = await axios.post<res.GetUserTokens>(
      SPOTIFY_TOKEN_URL,
      stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: this.redirect_uri,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodeBase64(
            `${this.client_id}:${this.client_secret}`
          )}`,
        },
      }
    );

    return response.data;
  }

  public async refreshUserToken(refresh_token = this.refresh_token) {
    if (!refresh_token || !this.client_id || !this.client_secret)
      throw new Error(
        "Refreshing user token requires client_id, client_secret, and redirect_uri"
      );

    const response = await axios.post<res.RefreshAccessToken>(
      SPOTIFY_TOKEN_URL,
      stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodeBase64(
            `${this.client_id}:${this.client_secret}`
          )}`,
        },
      }
    );

    return response.data;
  }

  // #region AUTH
  // #endregion

  // #region ALBUMS
  // #endregion

  // #region ARTISTS
  // #endregion

  // #region CATEGORIES
  // #endregion

  // #region EPISODES
  // #endregion

  // #region GENRES
  // #endregion

  // #region MARKETS
  // #endregion

  // #region PLAYER
  // #endregion

  // #region PLAYLISTS
  // #endregion

  // #region SEARCH
  // #endregion

  // #region SHOWS
  // #endregion

  // #region TRACKS
  // #endregion

  // #region USERS
  // #endregion
}
