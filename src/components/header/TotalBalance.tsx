import { useEffect, useState } from "react";
import { getLiveBalances, getTestBalances } from "services/DashboardService";

const TotalBalance = ({ accountType }: { accountType: "demo" | "live" }) => {
  const [totalLiveBalance, setTotalLiveBalance] = useState(0);
  const [totalTestBalance, setTotalTestBalance] = useState(0);

  useEffect(() => {
    getLatestBalanceData();

    async function getLatestBalanceData() {
      if (typeof window !== "undefined") {
        const testBalance = await getTestBalances(
          JSON.parse(window.localStorage.getItem("pocketbase_auth"))["model"][
            "testBalances"
          ]
        );
        const liveBalance = await getLiveBalances(
          JSON.parse(window.localStorage.getItem("pocketbase_auth"))["model"][
            "liveBalances"
          ]
        );

        setTotalTestBalance(
          testBalance["btcBalance"] +
            testBalance["ethBalance"] +
            testBalance["usdtBalance"]
        );
        setTotalLiveBalance(
          liveBalance["btcBalance"] +
            liveBalance["ethBalance"] +
            liveBalance["usdtBalance"]
        );
        console.log(
          totalLiveBalance,
          totalTestBalance,
          "::: LIVE AND TEST BALANCES"
        );
      }
    }
  }, []);
  useEffect(() => {
    getLatestBalanceData();

    async function getLatestBalanceData() {
      if (typeof window !== "undefined") {
        const testBalance = await getTestBalances(
          JSON.parse(window.localStorage.getItem("pocketbase_auth"))["model"][
            "testBalances"
          ]
        );
        const liveBalance = await getLiveBalances(
          JSON.parse(window.localStorage.getItem("pocketbase_auth"))["model"][
            "liveBalances"
          ]
        );

        setTotalTestBalance(
          testBalance["btcBalance"] +
            testBalance["ethBalance"] +
            testBalance["usdtBalance"]
        );
        setTotalLiveBalance(
          liveBalance["btcBalance"] +
            liveBalance["ethBalance"] +
            liveBalance["usdtBalance"]
        );
        console.log(
          totalLiveBalance,
          totalTestBalance,
          "::: LIVE AND TEST BALANCES"
        );
      }
    }
  }, [accountType]);

  return (
    <span className="text-xl line-clamp-2 font-bold">
      $
      {accountType === "demo"
        ? totalTestBalance.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })
        : totalLiveBalance.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
    </span>
  );
};

export default TotalBalance;
