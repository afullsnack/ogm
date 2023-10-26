// TradingViewWidget.jsx

import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";
import { $tabs, getAllTabs } from "stores/dashboard";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef(null);

  useEffect(() => {
    // onLoadScriptRef.current =
    createWidget();
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

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current);

    return () => {
      document.head.removeChild(script);
    };

    function createWidget() {
      if (
        document.getElementById("tradingview_f9942") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
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
        window.alert("No trading view object in window");
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_f9942",
        });
      }
    }
  }, []);

  const tabs = useStore($tabs);
  const [headerTabs, setHeaderTabs] = useState([...tabs]);

  useEffect(() => {
    setHeaderTabs(getAllTabs());
    console.log(tabs, "::: useStore_Tabs");
    console.log(headerTabs, "::: localStorage_Tabs_from dashboard");
  }, [headerTabs]);

  return (
    <div className="tradingview-widget-container h-full">
      <div id="tradingview_f9942" className="w-full h-full" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank">
          <span className="text-blue-500">
            Track all markets on TradingView
          </span>
        </a>
      </div>
    </div>
  );
}
