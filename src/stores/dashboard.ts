import { atom } from "nanostores";

type HeaderData = {
  peer: string;
  market: string;
  price: number;
  changeIn1h: number;
};

export const $dashboardData = atom<any[]>([]);
export const $headerData = atom<HeaderData[]>([]);

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

  console.log(":::Dashboard token data");
  console.table(json);

  $dashboardData.set(json);
};

export const addToHeaderData = (data: HeaderData) => {
  console.log(data, ":::Data to add to header");

  $headerData.set([...$headerData.get(), data]);
};
