import { useStore } from "@nanostores/react";
import { FC, useEffect, useState } from "react";
import {
  $dashboardData,
  addNewTab,
  fetchDashboardData,
  getMarketData,
} from "stores/dashboard";

const AssetSearch: FC = () => {
  const dashboardData = useStore($dashboardData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function waitForFetch() {
      await fetchDashboardData({ page: 1, limit: 100 });
    }

    waitForFetch();
  }, []);

  return (
    <>
      <input
        type="text"
        className="bg-slate-800 peer border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium uppercase absolute top-1 left-5 right-5 md:left-20 md:right-20"
        placeholder="BTC/ETH"
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <div className="py-4 rounded-lg overflow-y-scroll h-full bg-slate-700/90 mt-1 absolute top-14 left-5 right-5 md:left-20 md:right-20">
        <ul className="w-full h-auto list-none">
          {dashboardData &&
            !!dashboardData.length &&
            dashboardData
              .filter(
                (value) =>
                  value["name"].toLowerCase().indexOf(search.toLowerCase()) !==
                    -1 ||
                  value["symbol"]
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) !== -1
              )
              .map((data) => (
                <li
                  className="flex justify-between items-center hover:bg-gray-400/40 px-4 hover:cursor-pointer token-list text-white"
                  key={data["symbol"]}
                  onClick={async () => {
                    const market = await getMarketData({ coin: data["id"] });
                    addNewTab({
                      ...market,
                    });
                    window.location.reload();
                  }}>
                  <span className="text-left">{data["symbol"]}</span>
                  <span className="text-left flex-1 max-w-fit">
                    {data["name"]}
                  </span>
                  <span className="text-right">
                    {data["price"].toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default AssetSearch;
