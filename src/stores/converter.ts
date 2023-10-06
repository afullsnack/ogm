import { atom } from "nanostores";
type TConverter = {
  asset: string;
  price: number;
  logo: string;
};

export const $converterList = atom([]);

export const addToList = async (asset: string) => {
  // const result = await fetch();
};
