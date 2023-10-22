import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

export type HeaderData = {
  pair: string;
  exchange: string;
  price: number;
  changeIn1h: number;
  coinId: string;
  selected: boolean;
};

export const $dashboardData = atom<any[]>([]);
export const $tabs = persistentAtom<HeaderData[]>("tabs", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const fetchDashboardData = async ({
  skip = 0,
  limit = 100,
}: {
  skip: number;
  limit: number;
}) => {
  const ASSET_LIST_DATA_URL = `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}`;

  const result = await fetch(ASSET_LIST_DATA_URL);
  const json = await result.json();

  $dashboardData.set(json["coins"]);
};

export const addNewTab = (newTab: HeaderData) => {
  try {
    console.log(newTab, ":::Data to add to new Tab");

    // Call market API to get the pair, exchange and price

    $tabs.set([...$tabs.get(), newTab]);
  } catch (e: any) {
    throw new Error(e.message ?? e.toString());
  }
};

export const getAllTabs = () => {
  return $tabs.get();
};

export const removeTab = ({ coinId }: { coinId: string }) => {
  // remove tab when X clicked

  $tabs.set($tabs.get().filter((tab) => tab.coinId !== coinId));
};

export const selectTab = ({ coinId }: { coinId: string }) => {
  console.log(coinId, ":::Select tab");
  const tabToUpdate = $tabs.get().find((value) => value.coinId === coinId);
  if (tabToUpdate) {
    const updatedTab = {
      ...tabToUpdate,
      selected: true,
    };
    const filteredTabs = $tabs
      .get()
      .filter((tab) => tab.coinId !== coinId)
      .map((value: HeaderData) => ({
        ...value,
        selected: false,
      }));

    filteredTabs.push(updatedTab);

    // Re-allocate
    $tabs.set(filteredTabs);
  }
};

export const getMarketData = async ({
  coin,
}: {
  coin: string;
}): Promise<HeaderData> => {
  const API_URL = `https://api.coinstats.app/public/v1/markets?coinId=${coin}`;

  const result = await fetch(API_URL);
  const json = await result.json();
  console.log(coin, ":::Coin market data");

  const tokenData = await getTokenData({ coin });

  if (!json && !tokenData) {
    return {
      pair: "Loading...",
      exchange: "Loading...",
      price: 0,
      changeIn1h: 0,
      coinId: "Loading...",
      selected: false,
    };
  }

  return {
    pair: json[0]["pair"],
    exchange: json[0]["exchange"],
    price: json[0]["price"],
    changeIn1h: tokenData["priceChange1h"],
    coinId: tokenData["id"],
    selected: false,
  };
};

export const refreshTabData = async () => {
  if ($tabs.get().length) {
    $tabs.set(
      await Promise.all(
        $tabs
          .get()
          .map(async (tab) => await getMarketData({ coin: tab.coinId }))
      )
    );
  }
};

export const getTokenData = async ({
  coin,
}: {
  coin: string;
}): Promise<Array<any>> => {
  const API_URL = `https://api.coinstats.app/public/v1/coins/${coin}`;

  const result = await fetch(API_URL);
  const json = await result.json();

  return json["coin"];
};