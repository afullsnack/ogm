/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.f5b2d3c4.mjs';
import { e as $$Link, a as $$Container, b as $$Icon, $ as $$Layout } from './404.astro.ade91ba1.mjs';
import 'fs';
import 'path';
import 'os';
import 'url';
/* empty css                         */
const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Tick = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor"></path>
</svg>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/ui/icons/tick.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing;
  const { plan } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-stretch flex">
  <div class="flex flex-col justify-between w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
    <div>
      <div class="text-start">
        <h4 class="text-lg font-bold text-gray-800">${plan.name}</h4>
        <p class="mt-1 text-xs font-light text-black md:text-sm">
          ${plan.sub}
        </p>
      </div>
      <ul class="grid mt-8 text-left gap-y-4">
        ${plan.features.map((item) => renderTemplate`<li class="flex items-start gap-3 text-gray-800">
              ${renderComponent($$result, "Tick", $$Tick, { "class": "w-6 h-6 text-blue-600" })}
              <span>${item}</span>
            </li>`)}
      </ul>
    </div>
    <div class="flex mt-8">
      ${renderComponent($$result, "Link", $$Link, { "href": plan.button.link || "#", "block": true, "class": "capitalize text-sm", "style": "primary" }, { "default": ($$result2) => renderTemplate`${plan.button.text}` })}
    </div>
  </div>
</div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/pricing.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Trade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trade;
  const pricing = [
    {
      name: "Learn",
      sub: "KNOWLEDGE TO GET STARTED",
      popular: false,
      features: [
        "FREE Demo Account",
        "Step-by step tutorials & articles",
        "Online webinars & local seminars",
        "Your own Account Manager"
      ],
      button: {
        text: "OPEN DEMO ACCOUNT",
        link: "/user"
      }
    },
    {
      name: "Trade",
      sub: "TAKE YOUR FIRST PROFIT",
      popular: true,
      features: [
        "Tight spreads",
        "Superfast trade execution",
        "Hi-tech forex trading tools",
        "Ultimate risk protection & security"
      ],
      button: {
        text: "OPEN REAL ACCOUNT",
        link: "/user"
      }
    },
    {
      name: "Invest",
      sub: "CHOOSE THE BEST PORTFOLIO",
      popular: false,
      features: [
        "No need to be an experienced",
        "Large number of strategies",
        "Profit whenever Managers earn",
        "Full control of your Investment"
      ],
      button: {
        text: "INVEST NOW",
        link: "/user"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Opti-Growth | Trade markets" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate(_a || (_a = __template(["\n    \n    ", '<div class="flex items-center justify-center">\n      <div class="grid items-center justify-center">\n        <h1 class="font-bold text-3xl">Trading products</h1>\n        <span>Choose from 6 asset classes and get access to 500+ trading\n          instruments</span>\n      </div>\n\n      <div class="grid w-full">\n      <div class="flex gap-10 items-center justify-center w-full mt-5 border-l border-l-gray-400">\n        <div class="grid items-center justify-center justify-items-center">\n          <div class="rounded-full w-16 h-16 bg-gray-300 grid items-center outline-none justify-center">\n            ', '\n          </div>\n          <span class="font-bold text-gray-600/90">Forex</span>\n        </div>\n        <div class="grid items-center justify-center justify-items-center">\n          <div class="rounded-full w-16 h-16 bg-gray-300 grid items-center outline-none justify-center">\n            ', '\n          </div>\n          <span class="font-bold text-gray-600/90">Crypto</span>\n        </div>\n        <div class="grid items-center justify-center justify-items-center">\n          <div class="rounded-full w-16 h-16 bg-gray-300 grid items-center outline-none justify-center">\n            ', '\n          </div>\n          <span class="font-bold text-gray-600/90">Indexes</span>\n        </div>\n        <div class="grid items-center justify-center justify-items-center">\n          <div class="rounded-full w-16 h-16 bg-gray-300 grid items-center outline-none justify-center">\n            ', '\n          </div>\n          <span class="font-bold text-gray-600/90">Stocks</span>\n        </div>\n        <div class="grid items-center justify-center justify-items-center">\n          <div class="rounded-full w-16 h-16 bg-gray-300 grid items-center outline-none justify-center">\n            ', '\n          </div>\n          <span class="font-bold text-gray-600/90">Energy</span>\n        </div>\n        <div class="grid items-center justify-center justify-items-center">\n          <div class="rounded-full w-16 h-16 bg-gray-300 grid items-center outline-none justify-center">\n            ', '\n          </div>\n          <span class="font-bold text-gray-600/90">Commodities</span>\n        </div>\n      </div>\n      <div class="w-full px-4 mt-5">\n        <!-- TradingView Widget BEGIN -->\n<div class="tradingview-widget-container">\n  <div class="tradingview-widget-container__widget"></div>\n  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->\n  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>\n  {\n  "symbols": [\n    {\n      "proName": "FOREXCOM:SPXUSD",\n      "title": "S&P 500"\n    },\n    {\n      "proName": "FOREXCOM:NSXUSD",\n      "title": "US 100"\n    },\n    {\n      "proName": "FX_IDC:EURUSD",\n      "title": "EUR to USD"\n    },\n    {\n      "proName": "BITSTAMP:BTCUSD",\n      "title": "Bitcoin"\n    },\n    {\n      "proName": "BITSTAMP:ETHUSD",\n      "title": "Ethereum"\n    },\n    {\n      "description": "Bitcoin",\n      "proName": "BINANCE:BTCUSDT"\n    }\n  ],\n  "colorTheme": "dark",\n  "isTransparent": false,\n  "showSymbolLogo": true,\n  "locale": "en"\n}\n  <\/script>\n</div>\n<!-- TradingView Widget END -->\n      </div>\n    </div>\n    </div>\n\n    <div class="grid grid-cols-5 gap-4 mt-40 max-w-4xl mx-auto">\n      <div class="grid items-center justify-items-center text-center w-40">\n        <h1 class="font-bold text-gray-600/90">Wide Range of Trading Instruments</h1>\n      </div>\n      <div class="grid items-center justify-items-center text-center w-40">\n        <h1 class="font-bold text-gray-600/90">Unparalleled Trading Conditions</h1>\n      </div>\n      <div class="grid items-center justify-items-center text-center w-40">\n        <h1 class="font-bold text-gray-600/90">Globally Licensed & Regulated</h1>\n      </div>\n      <div class="grid items-center justify-items-center text-center w-40">\n        <h1 class="font-bold text-gray-600/90">Crypto & Forex Education</h1>\n      </div>\n      <div class="grid items-center justify-items-center text-center w-40">\n        <h1 class="font-bold text-gray-600/90">Regular Contests & Promotions</h1>\n      </div>\n    </div>\n    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">\n      ', "\n    </div>\n  "])), maybeRenderHead(), renderComponent($$result3, "Icon", $$Icon, { "name": "bi:currency-euro", "class": "w-5 h-5 text-black" }), renderComponent($$result3, "Icon", $$Icon, { "name": "bi:currency-bitcoin", "class": "w-5 h-5 text-black" }), renderComponent($$result3, "Icon", $$Icon, { "name": "bi:bar-chart-fill", "class": "w-5 h-5 text-black" }), renderComponent($$result3, "Icon", $$Icon, { "name": "bi:file-image-fill", "class": "w-5 h-5 text-black" }), renderComponent($$result3, "Icon", $$Icon, { "name": "bi:droplet", "class": "w-5 h-5 text-black" }), renderComponent($$result3, "Icon", $$Icon, { "name": "bi:box-seam", "class": "w-5 h-5 text-black" }), pricing.map((item) => renderTemplate`${renderComponent($$result3, "PricingCard", $$Pricing, { "plan": item })}`)) })}
  <div class="px-20 mt-20">
    <div class="w-full flex justify-between items-center p-10 rounded-lg bg-slate-400/30 mx-auto max-w-7xl">
      <h1 class="text-xl font-bold">Trade and get free commisions Today. It's that easy!</h1>
      ${renderComponent($$result2, "Link", $$Link, { "size": "md", "style": "primary", "rel": "noopener", "href": "/user", "class": "flex gap-1 items-center justify-centers text-sm bg-blue-600", "target": "_blank" }, { "default": ($$result3) => renderTemplate`
      
      OPEN AN ACCOUNT
    ` })}
    </div>
  </div>
` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/trade.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/trade.astro";
const $$url = "/trade";

export { $$Trade as default, $$file as file, $$url as url };
