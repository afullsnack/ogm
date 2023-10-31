// TradingViewWidget.jsx

import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";
import { $tabs, getAllTabs } from "stores/dashboard";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef(null);
  const [chartToken, setChartToken] = useState("");

  useEffect(() => {
    onLoadScriptRef.current = createWidget;
    let script;
    console.log("No trading view object yet");

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current());
    console.log(tvScriptLoadingPromise, "::: script loading ");
    // createWidget();

    return () => {
      document.head.removeChild(script);
    };

    function createWidget() {
      if (
        document.getElementById("tradingview_f9942") &&
        "TradingView" in window
      ) {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: chartToken ?? "OKEX:STETHUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_f9942",
        });
      } else {
        console.log("No trading view object yet");
      }
    }
  }, [chartToken]);

  const tabs = useStore($tabs);
  const [headerTabs, setHeaderTabs] = useState([...tabs]);

  useEffect(() => {
    setHeaderTabs(getAllTabs());
    const selected = getAllTabs().find((val) => val.selected);
    const exchange = selected.exchange.toLocaleLowerCase().includes("binance")
      ? "BINANCE"
      : selected.exchange.toUpperCase();
    const assetPair = selected.pair.replace("/", "");

    console.log(tabs, "::: useStore_Tabs");
    console.log(exchange, assetPair, "::: Asset and pair");
    setChartToken((_) => `${exchange}:${assetPair}`);
  }, []);
  useEffect(() => {
    setHeaderTabs(getAllTabs());
    const selected = getAllTabs().find((val) => val.selected);
    const exchange = selected.exchange.toLocaleLowerCase().includes("binance")
      ? "BINANCE"
      : selected.exchange.toUpperCase();
    const assetPair = selected.pair.replace("/", "");

    console.log(tabs, "::: useStore_Tabs");
    console.log(exchange, assetPair, "::: Asset and pair");
    setChartToken((_) => `${exchange}:${assetPair}`);
  }, [headerTabs]);

  return (
    <div className="tradingview-widget-container h-full -z-[1]">
      <div id="tradingview_f9942" className="w-full h-full -z-50" />
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank">
          <span className="text-blue-500">
            Track all markets on TradingView
          </span>
        </a>
      </div> */}
    </div>
  );
}
