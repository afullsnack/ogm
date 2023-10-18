import { atom } from "nanostores";
import { getMarketData } from "./dashboard";

type WatchList = {
  symbol: string;
  lastPrice: number;
  priceChange1h: number;
  coinId: string;
};

export const $watchList = atom<WatchList[]>([]);

export const addToWatchList = (newWatchList: WatchList) => {
  $watchList.set([...$watchList.get(), { ...newWatchList }]);
};

export const removeFromWatchList = (symbol: string) => {
  $watchList.set($watchList.get().filter((value) => value.symbol !== symbol));
};

export const refreshWatchList = async () => {
  // Call the market data
  const watchListMapping = await Promise.all(
    $watchList.get().map(async (item) => {
      const result = await getMarketData({ coin: item.coinId });
    })
  );
};
