/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

declare global {
  interface Window {
    TradingView: any;
  }
}
