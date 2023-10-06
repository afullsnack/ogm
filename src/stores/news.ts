import { atom } from "nanostores";

type TNews = {
  title: string;
  description: string;
  feedDate: number;
  source: string;
  shareURL: string;
};

export const $news = atom<TNews[]>([]);

export const fetchNews = async (skip: number = 0, limit: number = 20) => {
  const NEWS_DATA_URL = `https://api.coinstats.app/public/v1/news?skip=${skip}&limit=${limit}`;

  const result = await fetch(NEWS_DATA_URL);
  const json = await result.json();

  $news.set(json["news"]);
};
