import { persistentAtom, persistentMap } from "@nanostores/persistent";
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
export const $accounts = persistentMap<Record<string, any>>("accounts:", {
  activeAccount: "demo",
  demoBalance: 0,
  liveBalance: 0,
});

export const changeAccountType = (account: "demo" | "live") => {
  $accounts.setKey("activeAccount", account);
};

export const setAggregateBalance = (balance: number) => {
  $accounts.setKey(
    $accounts.get()["activeAccount"] === "live" ? "liveBalance" : "demoBalance",
    balance
  );
};

export const fetchDashboardData = async ({
  page = 1,
  limit = 100,
}: {
  page: number;
  limit: number;
}) => {
  const ASSET_LIST_DATA_URL = `${
    import.meta.env.PUBLIC_COIN_STATS_URL
  }/coins?page=${page}&limit=${limit}`;

  try {
    const result = await fetch(ASSET_LIST_DATA_URL, {
      headers: {
        "X-API-KEY": import.meta.env.PUBLIC_COIN_STATS_API_KEY,
      },
    });
    const json = await result.json();
    $dashboardData.set(json["result"]);
  } catch (e: any) {
    console.log(e.message ?? e.toString(), ":::fetchDashboardData_error");
    // window.alert(e.message ?? e.toString());
  }
};

export const addNewTab = (newTab: HeaderData) => {
  try {
    console.log(newTab, ":::Data to add to new Tab");

    // Check if tab is already in list
    if ($tabs.get().some((value) => value.coinId === newTab.coinId)) {
      $tabs.set(
        $tabs
          .get()
          .map((value) =>
            value.coinId === newTab.coinId
              ? { ...newTab, selected: true }
              : { ...value, selected: false }
          )
      );
      return;
    }

    $tabs.set([
      ...$tabs.get().map((value) => ({ ...value, selected: false })),
      { ...newTab, selected: true },
    ]);
  } catch (e: any) {
    window.alert(e.message ?? e.toString());
    console.log(e.message ?? e.toString(), ":::addNewTab_error");
  }
};

export const getAllTabs = () => {
  return $tabs.get();
};

export const removeTab = ({ coinId }: { coinId: string }) => {
  // remove tab when X clicked
  const filteredTabs = $tabs.get().filter((tab) => tab.coinId !== coinId);
  $tabs.set(
    filteredTabs.map((value, index) =>
      index === 0 ? { ...value, selected: true } : { ...value, selected: false }
    )
  );
};

export const selectTab = ({ coinId }: { coinId: string }) => {
  console.log(coinId, ":::Select tab");
  const filteredTabs = $tabs.get().map((value: HeaderData) =>
    value.coinId === coinId
      ? {
          ...value,
          selected: true,
        }
      : {
          ...value,
          selected: false,
        }
  );

  // Re-allocate
  $tabs.set(filteredTabs);
};

export const getMarketData = async ({
  coin,
}: {
  coin: string;
}): Promise<HeaderData> => {
  // const API_URL = `${
  //   import.meta.env.PUBLIC_COIN_STATS_URL
  // }/markets?coinId=${coin}`;

  try {
    // const result = await fetch(API_URL, {
    //   headers: { "X-API-KEY": import.meta.env.PUBLIC_COIN_STATS_API_KEY },
    // });
    // const json = await result.json();
    // console.log(coin, ":::Coin market data");

    const tokenData = await getTokenData({ coin });

    if (!tokenData) {
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
      pair: `${tokenData["symbol"]}/USDT`,
      exchange: "OKEX",
      price: tokenData["price"],
      changeIn1h: tokenData["priceChange1h"],
      coinId: tokenData["id"],
      selected: true,
    };
  } catch (e: any) {
    window.alert(e.message ?? e.toString());
    console.log(e.message ?? e.toString(), "**** marketData_ERROR");
    return {
      pair: "Loading...",
      exchange: "Loading...",
      price: 0,
      changeIn1h: 0,
      coinId: "Loading...",
      selected: false,
    };
  }
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
  const API_URL = `${import.meta.env.PUBLIC_COIN_STATS_URL}/coins/${coin}`;

  try {
    const result = await fetch(API_URL, {
      headers: { "X-API-KEY": import.meta.env.PUBLIC_COIN_STATS_API_KEY },
    });
    const json = await result.json();

    return json;
  } catch (e: any) {
    window.alert(e.message ?? e.toString());
    console.log(e.message ?? e.toString(), ":::getToken_error");
    return [];
  }
};
