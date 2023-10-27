import { atom } from "nanostores";

type TNews = {
  title: string;
  feedDate: number;
  source: string;
  shareURL: string;
};

export const $news = atom<TNews[]>([]);

export const fetchNews = async (skip: number = 1, limit: number = 20) => {
  const NEWS_DATA_URL = `${
    import.meta.env.PUBLIC_COIN_STATS_URL
  }/news?page=${skip}&limit=${limit}`;

  const result = await fetch(NEWS_DATA_URL, {
    headers: { "X-API-KEY": import.meta.env.PUBLIC_COIN_STATS_API_KEY },
  });
  const json = await result.json();

  $news.set(json["result"]);
};
