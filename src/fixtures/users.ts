import type { PrivateUser, PublicUser } from "../types/spotify/objects";

export const PRIVATE_USER: PrivateUser = {
  country: "US",
  display_name: "Jackson McMath",
  email: "jacksonmcmath@gmail.com",
  explicit_content: {
    filter_enabled: false,
    filter_locked: false,
  },
  external_urls: {
    spotify: "https://open.spotify.com/user/jacksonmcmath",
  },
  followers: {
    href: null,
    total: 48,
  },
  href: "https://api.spotify.com/v1/users/jacksonmcmath",
  id: "jacksonmcmath",
  images: [
    {
      height: null,
      url: "https://i.scdn.co/image/ab6775700000ee8578445dae2f879e468a4a0cbf",
      width: null,
    },
  ],
  product: "premium",
  type: "user",
  uri: "spotify:user:jacksonmcmath",
};

export const PUBLIC_USER: PublicUser = {
  display_name: "Jackson McMath",
  external_urls: {
    spotify: "https://open.spotify.com/user/jacksonmcmath",
  },
  followers: {
    href: null,
    total: 48,
  },
  href: "https://api.spotify.com/v1/users/jacksonmcmath",
  id: "jacksonmcmath",
  images: [
    {
      height: null,
      url: "https://i.scdn.co/image/ab6775700000ee8578445dae2f879e468a4a0cbf",
      width: null,
    },
  ],
  type: "user",
  uri: "spotify:user:jacksonmcmath",
};
