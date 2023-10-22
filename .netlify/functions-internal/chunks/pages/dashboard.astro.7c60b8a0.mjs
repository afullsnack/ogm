/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, b as addAttribute, d as renderSlot, i as renderHead } from '../astro.f5b2d3c4.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, createElement, createContext, useContext } from 'react';
import { c as $$DropdownItems, d as $$Dropdown, b as $$Icon } from './404.astro.ade91ba1.mjs';
/* empty css                               */import { useStore } from '@nanostores/react';
import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';
import { X, ChevronFirst, ChevronLast, Plus, PieChart, History, Calculator, Hash, User } from 'lucide-react';
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://ogm-admin.fly.dev");
const loginWithPass = async (email, pass) => {
  try {
    if (!email) {
      window.alert("No email address provided");
      throw new Error("No email address provided");
    } else if (!pass) {
      window.alert("No password provided");
      throw new Error("No password provided");
    }
    const user = await pb.collection("users").authWithPassword(email, pass);
    console.log(user, "::USer collection");
    pb.authStore.exportToCookie({ httpOnly: false }, "pb_auth");
    window.location.href = "http://localhost:3000/user/dashboard";
  } catch (e) {
    window.alert(e.toString());
    throw new Error(e.message ?? e.toString());
  }
};
const registerNewUser = async ({
  name,
  email,
  password,
  confirmPassword,
  term
}) => {
  if (!term) {
    window.alert("Terms and condition not yet accepted");
    throw new Error("Terms and condition not yet accepted");
  } else if (password !== confirmPassword) {
    window.alert("Passwords do not match");
    throw new Error("Passwords do not match");
  }
  const result = await pb.collection("users").create({
    name,
    email,
    password,
    passwordConfirm: confirmPassword
  });
  console.log(result, ":::New user created");
  return result;
};
const logout = () => {
  pb.authStore.clear();
  window.location.href = "http://localhost:3000/user";
};
const isLoggedIn = () => {
  return pb.authStore.isValid;
};

const FooterTimer = () => {
  const [currentTIme, setCurrentTime] = useState(
    (/* @__PURE__ */ new Date()).toLocaleTimeString()
  );
  const updateCounter = () => {
    setCurrentTime((/* @__PURE__ */ new Date()).toLocaleTimeString());
  };
  useEffect(() => {
    const intervalId = setInterval(updateCounter, 1e3);
    return () => clearInterval(intervalId);
  }, []);
  return /* @__PURE__ */ jsxs("span", { className: "ml-2 text-sm text-white flex gap-4", children: [
    /* @__PURE__ */ jsx("span", { children: (/* @__PURE__ */ new Date()).toLocaleDateString() }),
    currentTIme
  ] });
};

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$AccountNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AccountNav;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative top-0">
  ${renderComponent($$result, "DropdownContainer", $$Dropdown, { "class": "group" }, { "default": ($$result2) => renderTemplate`
    <button class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
      <span>${title}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>
    ${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate`
      <div${addAttribute([
    "lg:absolute w-full lg:w-48 z-10",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}>
        <div class="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
          ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="py-1 text-gray-600 hover:text-gray-900">
                ${item.title}
              </a>`)}
        </div>
      </div>
    ` })}
  ` })}
</li>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/navbar/account-nav.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, open } = Astro2.props;
  return renderTemplate`

${maybeRenderHead()}<div class="w-10 h-10 bg-transparent mx-2 hover:cursor-pointer hover:bg-slate-500/60 transition-all duration-75 border border-slate-300/60 rounded-md flex items-center justify-center justify-items-center p-1 astro-32RSSRX7"${addAttribute(`window.${id}.showModal()`, "onclick")}>
  ${renderComponent($$result, "Icon", $$Icon, { "name": "bi:plus-lg", "class": "w-5 h-5 text-white astro-32RSSRX7" })}
</div>

<!-- <button >{open}</button> -->

<dialog${addAttribute(id, "id")} class="astro-32RSSRX7">
  ${renderSlot($$result, $$slots["main"])}
  <form method="dialog" class="astro-32RSSRX7">
    ${renderSlot($$result, $$slots["close"])}
  </form>
</dialog>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/ui/modal.astro", void 0);

const $dashboardData = atom([]);
const $tabs = persistentAtom("tabs", [], {
  encode: JSON.stringify,
  decode: JSON.parse
});
const fetchDashboardData = async ({
  skip = 0,
  limit = 100
}) => {
  const ASSET_LIST_DATA_URL = `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}`;
  const result = await fetch(ASSET_LIST_DATA_URL);
  const json = await result.json();
  $dashboardData.set(json["coins"]);
};
const getAllTabs = () => {
  return $tabs.get();
};
const removeTab = ({ coinId }) => {
  $tabs.set($tabs.get().filter((tab) => tab.coinId !== coinId));
};
const selectTab = ({ coinId }) => {
  console.log(coinId, ":::Select tab");
  const tabToUpdate = $tabs.get().find((value) => value.coinId === coinId);
  if (tabToUpdate) {
    const updatedTab = {
      ...tabToUpdate,
      selected: true
    };
    const filteredTabs = $tabs.get().filter((tab) => tab.coinId !== coinId).map((value) => ({
      ...value,
      selected: false
    }));
    filteredTabs.push(updatedTab);
    $tabs.set(filteredTabs);
  }
};

const TokenTab = ({
  exchange,
  pair,
  price,
  selected,
  coinId,
  selectTab,
  removeTab
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `bg-slate-700/90 rounded-lg mx-2 border-b-4 ${selected ? "border-b-blue-500" : "border-b-transparent"} px-4 py-2 grid items-start justify-center gap-2 hover:cursor-pointer`,
      onClick: () => selectTab({ coinId }),
      children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-white font-mono", children: [
          exchange,
          ":",
          pair
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-red-600 font-bold", children: price.toFixed(2) }),
          /* @__PURE__ */ jsx(
            X,
            {
              className: "h-4 w-4 text-white",
              onClick: () => removeTab({ coinId })
            }
          )
        ] })
      ]
    }
  );
};

const TabsList = () => {
  const tabs = useStore($tabs);
  const [headerTabs, setHeaderTabs] = useState([...tabs]);
  useEffect(() => {
    setHeaderTabs(getAllTabs());
    console.log(tabs, "::: useStore_Tabs");
    console.log(headerTabs, "::: localStorage_Tabs");
  }, [headerTabs]);
  return /* @__PURE__ */ jsx("div", { className: "flex-auto flex items-center justify-start px-2 max-w-2xl overflow-x-scroll w-full", children: headerTabs.map((item, index) => /* @__PURE__ */ createElement(
    TokenTab,
    {
      ...item,
      key: index,
      selected: item.selected,
      selectTab: ({ coinId }) => {
        selectTab({ coinId });
        setHeaderTabs(getAllTabs());
      },
      removeTab: ({ coinId }) => {
        removeTab({ coinId });
        setHeaderTabs(getAllTabs());
      }
    }
  )) });
};

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="sticky top-0 left-0 right-0 h-20 bg-slate-900/80 flex items-center justify-between">
  ${renderComponent($$result, "TabsList", TabsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/fullsnack/Documents/play/bun/ogm/src/components/header/TabsLIst", "client:component-export": "default" })}
  ${renderComponent($$result, "Modal", $$Modal, { "id": "newtabmodal", "open": "Open modal" }, { "close": ($$result2) => renderTemplate`<button class="mx-auto text-center absolute right-0 top-1">
      ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:window-close", "class": "h-10 w-10 text-slate-300" })}
    </button>`, "main": ($$result2) => renderTemplate`<main class="w-full grid items-start justify-items-start justify-center min-w-fit overflow-hidden h-full relative">
      ${renderComponent($$result2, "AssetSearch", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/fullsnack/Documents/play/bun/ogm/src/components/header/AssetSearch", "client:component-export": "default" })}
    </main>` })}
  <div class="w-full grid items-center justify-end px-10">
    ${renderComponent($$result, "AccountNavDropDown", $$AccountNav, { "title": "Practice account", "children": [
    {
      path: "/test",
      title: "Test"
    },
    {
      path: "/test",
      title: "Text"
    },
    {
      path: "/test",
      title: "Tester"
    }
  ], "lastItem": [
    {
      path: "/test",
      title: "Test"
    },
    {
      path: "/test",
      title: "Text"
    },
    {
      path: "/test",
      title: "Tester"
    }
  ].length - 1 })}
    <!-- <span class="font-medium text-xs uppercase text-orange-500">
      PRACTISE ACCOUNT
    </span>
    <span class="text-white font-medium text-lg">10,000.00</span> -->
  </div>

  <div class="px-5">
    ${renderComponent($$result, "Icon", $$Icon, { "name": "ic:sharp-notifications", "class": "w-8 h-8 text-white" })}
  </div>
</div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/header/header.astro", void 0);

const PanesContext = createContext();
const Sider = () => {
  const navItems = [
    {
      title: "BOARD",
      icon: /* @__PURE__ */ jsx(PieChart, { className: "w-6 h-6 text-white" }),
      link: "dashboard"
    },
    {
      title: "HISTORY",
      icon: /* @__PURE__ */ jsx(History, { className: "w-6 h-6 text-white" })
    },
    {
      title: "CONVERTER",
      icon: /* @__PURE__ */ jsx(Calculator, { className: "w-6 h-6 text-white" })
    },
    {
      title: "TODAY",
      icon: /* @__PURE__ */ jsx(Hash, { className: "w-6 h-6 text-white" }),
      link: "today"
    },
    {
      title: "SETTINGS",
      icon: /* @__PURE__ */ jsx(User, { className: "w-6 h-6 text-white" }),
      link: "settings"
    }
  ];
  const [watchListExpanded, setWatchListExpanded] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [converterExpanded, setConverterExpanded] = useState(false);
  const [todayExpanded, setTodayExpanded] = useState(false);
  const [waitListPosition, setWaitListPosition] = useState(70);
  const [converterPosition, setConverterPosition] = useState(70);
  const [todayPosition, setTodayPosition] = useState(70);
  const computeWaitListLeftPosition = () => {
    if (historyExpanded && converterExpanded && todayExpanded)
      return 250 + 250 + 250 + 70;
    if (historyExpanded && converterExpanded)
      return 250 + 250 + 70;
    if (historyExpanded && todayExpanded)
      return 250 + 250 + 70;
    if (converterExpanded && todayExpanded)
      return 250 + 250 + 70;
    if (historyExpanded)
      return 250 + 70;
    if (converterExpanded)
      return 250 + 70;
    if (todayExpanded)
      return 250 + 70;
    return 70;
  };
  const computeConverterLeftPosition = () => {
    if (historyExpanded)
      return 250 + 70;
    return 70;
  };
  useEffect(() => {
    setWaitListPosition(computeWaitListLeftPosition());
    setConverterPosition(computeConverterLeftPosition());
  }, [historyExpanded, converterExpanded, todayExpanded]);
  useEffect(() => {
    console.log(waitListPosition, ":::Wait list position");
  }, [watchListExpanded]);
  return /* @__PURE__ */ jsx("aside", { class: "sticky left-0 top-20 bottom-0 w-[70px] h-calc bg-slate-900/80 grid items-start justify-center justify-items-center z-50", children: /* @__PURE__ */ jsxs(
    PanesContext.Provider,
    {
      value: {
        historyExpanded,
        setHistoryExpanded,
        converterExpanded,
        setConverterExpanded,
        todayExpanded,
        setTodayExpanded,
        converterPosition,
        todayPosition
      },
      children: [
        /* @__PURE__ */ jsx("nav", { class: "h-full flex flex-col", children: navItems.map((item) => /* @__PURE__ */ jsx("div", { children: item.link || typeof item.link !== "undefined" ? /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/user/${item.link}`,
            class: "w-full h-[70px] bg-transparent flex flex-col items-center justify-items-center justify-center hover:bg-slate-800/80 hover:cursor-pointer",
            children: [
              item.icon,
              /* @__PURE__ */ jsx("span", { class: "text-[9px] font-bold text-white", children: item.title })
            ]
          },
          item.title
        ) : /* @__PURE__ */ jsxs(
          "div",
          {
            class: "w-full h-[70px] bg-transparent flex flex-col items-center justify-items-center justify-center hover:bg-slate-800/80 hover:cursor-pointer",
            onClick: () => item.title === "HISTORY" ? setHistoryExpanded((_prev) => !_prev) : item.title === "CONVERTER" ? setConverterExpanded((_prev) => !_prev) : item.title === "TODAY" ? setTodayExpanded((_prev) => !_prev) : null,
            children: [
              item.icon,
              /* @__PURE__ */ jsx("span", { class: "text-[9px] font-bold text-white", children: item.title })
            ]
          },
          item.title
        ) }, item.title)) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            class: `fixed left-[${waitListPosition}px] h-calc ${watchListExpanded ? "w-[300px]" : "w-0"} transition-all bg-slate-800/80 shadow-md`,
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  class: "w-6 h-10 flex items-center justify-center rounded-sm bg-red-400 absolute left-full top-[calc(50%-40px)]",
                  onClick: () => setWatchListExpanded((_prev) => !_prev),
                  children: watchListExpanded ? /* @__PURE__ */ jsx(ChevronFirst, { class: "w-4 h-4 text-white" }) : /* @__PURE__ */ jsx(ChevronLast, { class: "w-4 h-4 text-white" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { class: "flex items-start justify-center w-full h-full overflow-hidden", children: [
                /* @__PURE__ */ jsx("h1", { class: "capitalize flex-auto p-2 text-white font-semibold text-sm", children: "WATCH LIST" }),
                /* @__PURE__ */ jsx("input", { type: "text", class: "w-full flex-1 m-2 rounded-sm px-2" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(HistoryPane, {}),
        /* @__PURE__ */ jsx(ConverterPane, {})
      ]
    }
  ) });
};
const HistoryPane = ({ className }) => {
  const { historyExpanded, setHistoryExpanded } = useContext(PanesContext);
  return /* @__PURE__ */ jsx(
    "div",
    {
      class: `absolute left-[70px] h-calc ${historyExpanded ? "w-[250px]" : "w-0"} transition-all bg-slate-800/70 shadow-md ${className}`,
      children: /* @__PURE__ */ jsxs("div", { class: "grid items-start place-content-start justify-items-center justify-stretch w-full h-full overflow-hidden text-white", children: [
        /* @__PURE__ */ jsxs("div", { class: "w-full h-8 bg-slate-900 px-2 mx-auto mb-4 my-0 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { class: "text-xs", children: "Trade History" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              class: "w-3 h-3 rounded-sm text-xs flex items-center justify-center",
              onClick: () => setHistoryExpanded((_prev) => !_prev),
              children: /* @__PURE__ */ jsx(X, { class: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h1", { children: "NO ORDER TO SHOW" })
      ] })
    }
  );
};
const ConverterPane = ({ className }) => {
  const { converterExpanded, setConverterExpanded, converterPosition } = useContext(PanesContext);
  const convertList = [
    {
      asset: "Bitcoin",
      price: 1
    },
    {
      asset: "Ethereum",
      price: 16.87
    },
    {
      asset: "Euro",
      price: 26604.72
    },
    {
      asset: "Dollar US",
      price: 28011.23
    },
    {
      asset: "Litecoin",
      price: 432.89
    }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      class: `absolute left-[${converterPosition}px] h-calc ${converterExpanded ? "w-[250px]" : "w-0"} transition-all bg-slate-800/70 shadow-md ${className} z-50`,
      children: /* @__PURE__ */ jsxs("div", { class: "grid items-start place-content-start justify-items-center justify-stretch w-full h-full overflow-hidden text-white", children: [
        /* @__PURE__ */ jsxs("div", { class: "w-full h-8 bg-slate-900 px-2 mx-auto mb-4 my-0 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { class: "text-xs font-mono", children: "CONVERTER" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              class: "w-3 h-3 rounded-sm text-xs flex items-center justify-center",
              onClick: () => setConverterExpanded((_prev) => !_prev),
              children: /* @__PURE__ */ jsx(X, { class: "w-4 h-4" })
            }
          )
        ] }),
        convertList.map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            class: "p-2 my-1 bg-slate-950 focus-within:bg-green-700 w-full mx-auto flex items-center justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { class: "flex gap-1", children: [
                /* @__PURE__ */ jsx("div", { class: "w-6 h-6 rounded-full mr-2 bg-slate-600" }),
                /* @__PURE__ */ jsx("span", { children: item.asset })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: item.price,
                  class: "outline-none border-b border-b-gray-300 px-1 text-white bg-transparent py-1 text-end max-w-xs w-20 font-bold flex items-center justify-center justify-items-end h-8"
                }
              )
            ]
          },
          item.asset
        )),
        /* @__PURE__ */ jsx("div", { class: "w-8 h-8 flex items-center justify-center mt-4 rounded-full bg-orange-600", children: /* @__PURE__ */ jsx(Plus, { class: "h-6 w-6 text-white" }) })
      ] })
    }
  );
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$DashboardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <meta name="generator"', ">\n  ", '</head>\n  <body class="grid w-screen h-screen bg-slate-800">\n    ', '\n    <div class="flex items-start justify-items-start justify-start w-screen overflow-hidden h-calc">\n      ', '\n      <div class="w-full overflow-y-scroll grid h-calc">\n        ', '\n      </div>\n    </div>\n    <div class="w-full h-6 bg-blue-500 sticky bottom-0 right-0 left-0 flex items-center justify-end px-5 z-[100]">\n      <span class="text-xs text-white h-full px-2 flex items-center justify-center bg-slate-400/60 hover:bg-slate-400/40 hover:cursor-pointer">\n        ', "\n        CONTACT US\n      </span>\n      ", '\n    </div>\n\n    \n\n    <!-- Tidio chat code -->\n    <script src="//code.tidio.co/iq2qipotps6urp8h4c4yzwhytrpdoxia.js" async><\/script>\n  </body>\n</html>'])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Sider", Sider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/sider/sider.tsx", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Icon", $$Icon, { "name": "bi:chat", "class": "w-3 h-3 mr-2" }), renderComponent($$result, "FooterTimer", FooterTimer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/FooterTimer", "client:component-export": "default" }));
}, "/Users/fullsnack/Documents/play/bun/ogm/src/layouts/DashboardLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  await fetchDashboardData({ skip: 0, limit: 100 });
  if (!isLoggedIn()) {
    Astro2.redirect("/user");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["\n  ", '<div class="grid w-full h-full p-2">\n    <!-- TradingView Widget BEGIN -->\n    <div class="tradingview-widget-container h-full">\n      <div id="tradingview_bb32a h-full"></div>\n      <!-- <div class="tradingview-widget-copyright">\n        <a\n          href="https://www.tradingview.com/"\n          rel="noopener nofollow"\n          target="_blank"\n          ><span class="blue-text">Track all markets on TradingView</span></a>\n      </div> -->\n      <script type="text/javascript" src="https://s3.tradingview.com/tv.js"><\/script>\n      <script type="text/javascript">\n        new TradingView.widget({\n          autosize: true,\n          symbol: "BINANCE:BTCUSD",\n          interval: "D",\n          timezone: "Etc/UTC",\n          theme: "dark",\n          style: "1",\n          locale: "en",\n          enable_publishing: false,\n          withdateranges: true,\n          allow_symbol_change: true,\n          container_id: "tradingview_bb32a",\n        });\n      <\/script>\n    </div>\n    <!-- TradingView Widget END -->\n  </div>\n'])), maybeRenderHead()) })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/dashboard.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/dashboard.astro";
const $$url = "/user/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DashboardLayout as $, logout as a, dashboard as d, isLoggedIn as i, loginWithPass as l, registerNewUser as r };
