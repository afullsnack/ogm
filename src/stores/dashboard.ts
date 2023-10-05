import { atom } from "nanostores";

export const $dashboardData = atom([]);

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
