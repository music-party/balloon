import axios, { AxiosRequestConfig, Method } from "axios";
import { stringify } from "qs";
import { SPOTIFY_BASE_API_URL } from "./constants";

export type SpotifyRequestConfig = AxiosRequestConfig & {
  contentType?: string;
};

export default async function fetch<T>(
  path: string,
  method: Method,
  access_token: string,
  config?: SpotifyRequestConfig
) {
  const { contentType, ...axiosConfig } = config ?? {};
  try {
    const response = await axios({
      ...axiosConfig,
      baseURL: SPOTIFY_BASE_API_URL,
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": contentType ?? "application/json",
      },
      url: path,
      method,
      paramsSerializer,
    });
    return response.data as T;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { message } = error.response.data.error;
      throw new Error(message);
    }
    throw error;
  }
}

export function paramsSerializer(params: any): string {
  return stringify(params, { arrayFormat: "comma" });
}
