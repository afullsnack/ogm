import PocketBase from "pocketbase";

const pb = new PocketBase("https://ogm-admin.fly.dev");

export const updateLiveBalances = async (
  id: string,
  balanceRecord: Record<string, number>
) => {
  return await pb.collection("liveBalances").update(id, balanceRecord);
};

export const getTestBalances = async (id: string) => {
  try {
    return await pb.collection("testBalances").getOne(id);
  } catch (e: any) {
    console.log(e.message ?? e.toString());
  }
};

export const getLiveBalances = async (id: string) => {
  try {
    return await pb.collection("liveBalances").getOne(id);
  } catch (e: any) {
    console.log(e.message ?? e.toString());
  }
};
