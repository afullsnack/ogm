import { useEffect, useState } from "react";
import { getLiveBalances, getTestBalances } from "services/DashboardService";

const AccountSwitch = ({ accountType }: { accountType: "demo" | "live" }) => {
  const [totalLiveBalance, setTotalLiveBalance] = useState(0);
  const [totalTestBalance, setTotalTestBalance] = useState(0);
  const [btcBalance, setBTCBalance] = useState(0);
  const [ethBalance, setETHBalance] = useState(0);
  const [usdtBalance, setUSDTBalance] = useState(0);

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
        setBTCBalance(
          accountType === "demo"
            ? testBalance["btcBalance"]
            : liveBalance["btcBalance"]
        );
        setETHBalance(
          accountType === "demo"
            ? testBalance["ethBalance"]
            : liveBalance["ethBalance"]
        );
        setUSDTBalance(
          accountType === "demo"
            ? testBalance["usdtBalance"]
            : liveBalance["usdtBalance"]
        );
      }
    }
  }, []);

  return (
    <div className="px-3 lg:py-2 bg-slate-900 rounded-md shadow border flex gap-5 w-full justify-between border-r border-gray-300 z-50">
      <div className="text-white grid items-start justify-start">
        <span>BALANCES</span>
        <ul className="list-none grid items-center justify-start gap-1 text-xs">
          <li>
            BTC BALANCE:{" "}
            <b id="btcBalance">{btcBalance.toLocaleString("en-US")}</b>
          </li>
          <li>
            ETH BALANCE:{" "}
            <b id="ethBalance">{ethBalance.toLocaleString("en-US")}</b>
          </li>
          <li>
            USDT BALANCE:{" "}
            <b id="usdtBalance">{usdtBalance.toLocaleString("en-US")}</b>
          </li>
        </ul>
      </div>
      <div className="grid text-white items-start justify-end gap-2">
        <span>ACCOUNTS LIST</span>
        <a
          href={`${
            typeof window !== "undefined" ? window.location.origin : ""
          }/user/dashboard?account=demo`}
          className="grid px-2 py-1 items-start text-clip justify-items-start justify-center gap-1 text-orange-600 hover:text-orange-400 bg-gray-700/50 hover:bg-slate-400/20 active:bg-slate-400/30">
          <span>{"Demo account"}</span>
          <span className="text-lg line-clamp-2 font-bold">
            $
            {totalTestBalance.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </span>
        </a>
        <a
          href={`${
            typeof window !== "undefined" ? window.location.origin : ""
          }/user/dashboard?account=live`}
          className="grid px-2 py-1 items-start justify-items-start justify-center gap-1 text-green-600 hover:text-green-400 bg-gray-700/50 hover:bg-slate-400/20 active:bg-slate-400/30">
          <span>{"Live account"}</span>
          <span className="text-lg line-clamp-2 font-bold">
            $
            {totalLiveBalance.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </span>
        </a>
      </div>
    </div>
  );
};

export default AccountSwitch;
