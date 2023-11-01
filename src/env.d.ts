/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_COIN_STATS_API_KEY: string;
  readonly PUBLIC_COIN_STATS_URL: string;
  readonly PUBLIC_PB_ADMIN_EMAIL: string;
  readonly PUBLIC_PB_ADMIN_PASSWORD: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
