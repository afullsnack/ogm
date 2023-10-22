/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_cb3aa52d.mjs';
import 'clsx';
import { b as $$Icon, e as $$Link, a as $$Container, $ as $$Layout } from './404_3d16713a.mjs';
import { $ as $$Image } from './blog_ebf5310b.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { l as loginWithPass, r as registerNewUser, i as isLoggedIn } from './dashboard_953be533.mjs';

const Stat1 = {"src":"/_astro/stat-1.32477d63.svg","width":512,"height":512,"format":"svg"};

const Stat2 = {"src":"/_astro/stat-2.f1d99886.svg","width":512,"height":512,"format":"svg"};

const Stat3 = {"src":"/_astro/stat-3.44becc9b.svg","width":512,"height":512,"format":"svg"};

const Stat4 = {"src":"/_astro/stat-4.12f48096.svg","width":512,"height":512,"format":"svg"};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://astroship.web3templates.com");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Cta;
  const varieties = [
    {
      title: "Stocks",
      description: "Invest in stocks with 0% commission. Buy in bulk or just a fraction and earn.",
      img: "MSFT"
    },
    {
      title: "Forex",
      description: "Go long or short on FX from just 1 pip. Trade commodities with flexible leverage.",
      img: "USD"
    },
    {
      title: "Crypto",
      description: "Buy, sell and store Bitcoin and other leading cryptos with ease.",
      img: "BTC"
    },
    {
      title: "Learn",
      description: "All the resources you need to learn how to be successful in trading and investing.",
      img: "INFO"
    }
  ];
  const stats = [
    {
      stat: "20 years",
      title: "Experience",
      img: Stat1
    },
    {
      stat: "18 years",
      title: "Required",
      img: Stat2
    },
    {
      stat: "100K+",
      title: "Trades Per Day",
      img: Stat3
    },
    {
      stat: "24/7",
      title: "Customer Support",
      img: Stat4
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="bg-white p-8 md:px-20 md:py-20 mt-5 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"><h2 class="text-black text-4xl md:text-3xl tracking-tight font-bold">
Trade Crypto Easily.
</h2><p class="text-slate-400 mt-4 text-lg md:text-xl">
Join the world's fast-growing crypto platform for positive results!
</p><div class="flex my-5 gap-4">`, "", '</div><div class="grid mt-10 mb-10 w-[720px] h-[620px] max-h-fit"><!-- TradingView Widget BEGIN --><div class="tradingview-widget-container"><div class="tradingview-widget-container__widget"></div><!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> --><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>\n  {\n  "width": "100%",\n  "height": "100%",\n  "defaultColumn": "performance",\n  "defaultScreen": "general",\n  "market": "crypto",\n  "showToolbar": false,\n  "colorTheme": "dark",\n  "locale": "en",\n  "isTransparent": false\n}\n  <\/script></div><!-- TradingView Widget END --></div><div class="mt-20"><h2 class="text-black text-4xl md:text-3xl tracking-tight font-bold">\nMarket Varieties\n</h2><p class="text-slate-400 mt-4 text-lg md:text-xl">\nGet analysis, signals and actionable trade ideas from our expert analysts.\n</p><div class="flex gap-3 items-stretch justify-center mt-5">', '</div></div><div class="mt-20"><h2 class="text-black text-4xl md:text-3xl tracking-tight font-bold">\nTrade with <b class="text-blue-600">world-leading</b> broker.\n</h2><div class="flex gap-3 items-stretch justify-center mt-5">', "</div></div></div>"])), maybeRenderHead(), renderComponent($$result, "Link", $$Link, { "size": "md", "style": "primary", "rel": "noopener", "href": "/user", "class": "flex gap-1 items-center justify-center bg-blue-600 text-sm", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
START TRADING
${renderComponent($$result2, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}` }), renderComponent($$result, "Link", $$Link, { "size": "md", "style": "primary", "rel": "noopener", "href": "/user", "class": "flex gap-1 items-center justify-centers text-sm", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
VIEW SERVICES
${renderComponent($$result2, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}` }), varieties.map((item) => renderTemplate`<div class="w-1/4 bg-slate-700 text-white grid gap-6 p-5 text-start rounded-md"><h4 class="font-bold text-sm flex items-center justify-start gap-3"><div class="rounded-full w-8 h-8 flex items-center justify-center bg-red-400"><span class="text-[8px] font-bold">${item.img}</span></div>${item.title}</h4><span class="text-sm font-light">${item.description}</span><a href="#" class="flex gap-1 items-center justify-start py-1 px-0 text-blue-600 mx-0 text-xs">
START TRADING ${renderComponent($$result, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}</a></div>`), stats.map((item) => renderTemplate`<div class="w-44 text-white grid gap-6 p-5 items-center justify-center text-center border-b-blue-600/60 border-b">${renderComponent($$result, "Image", $$Image, { "src": item.img, "alt": item.title, "fit": "cover", "sizes": "(max-width: 80px) 80px, 70px", "loading": "eager", "format": "avif", "class": "mx-auto" })}<h4 class="font-bold text-gray-600/60 text-2xl flex items-center justify-center">${item.stat}</h4><span class="text-sm font-light text-blue-600">${item.title}</span></div>`));
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/cta.astro", void 0);

const Payment1 = {"src":"/_astro/payment-1.ec7b56b4.svg","width":220.3,"height":46,"format":"svg"};

const Payment2 = {"src":"/_astro/payment-2.d5920a35.svg","width":103,"height":32,"format":"svg"};

const Payment3 = {"src":"/_astro/payment-3.98d6f9d7.svg","width":103,"height":32,"format":"svg"};

const Payment4 = {"src":"/_astro/payment-4.9c2d641e.svg","width":103,"height":32,"format":"svg"};

const Payment5 = {"src":"/_astro/payment-5.fceccb7d.svg","width":103,"height":32,"format":"svg"};

const Payment6 = {"src":"/_astro/payment-6.4a671ae0.svg","width":103,"height":32,"format":"svg"};

const $$Astro$5 = createAstro("https://astroship.web3templates.com");
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Education;
  const payments = [
    Payment1,
    Payment2,
    Payment3,
    Payment4,
    Payment5,
    Payment6
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid items-center justify-center justify-items-center mt-20"><h2 class="font-bold text-black text-3xl mb-6">Education for all experience levels.</h2><div class="flex flex-wrap gap-8 items-center justify-evenly mb-10"><div class="flex items-stretch justify-center gap-4 bg-gray-300 border border-gray-400/60 rounded-sm"><div class="h-full w-4 bg-green-700/50 p-8"></div><div class="grid gap-1 items-center justify-start p-3"><span class="font-bold text-black/60 text-sm">Webinars and events</span><a class="text-xs font-light">SIGNU UP NOW </a></div></div><div class="flex items-stretch justify-center gap-4 bg-gray-300 border border-gray-400/60 rounded-sm"><div class="h-full w-4 bg-green-700/50 p-8"></div><div class="grid gap-1 items-center justify-start p-3"><span class="font-bold text-black/60 text-sm">Trading strategy videos</span><a class="text-xs font-light">SIGNU UP NOW </a></div></div><div class="flex items-stretch justify-center gap-4 bg-gray-300 border border-gray-400/60 rounded-sm"><div class="h-full w-4 bg-green-700/50 p-8"></div><div class="grid gap-1 items-center justify-start p-3"><span class="font-bold text-black/60 text-sm">Platform video guides</span><a class="text-xs font-light">SIGNU UP NOW </a></div></div></div><div class="flex items-center justify-between bg-white px-2 rounded-md gap-4"><span class="text-xs">Practice Stocks and CFDs trading in a risk-free environment</span><a href="/user" class="bg-blue-600 capitalize text-white py-2 px-3 rounded-lg flex items-center justify-center text-xs hover:bg-red-500 transition-all duration-75 hover:cursor-pointer">create a demo account ${renderComponent($$result, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}</a></div><div class="mt-24 grid justify-items-center"><h2 class="text-center text-slate-500 font-bold">We Accept...
</h2><div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">${payments.map((item) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": item, "alt": "Press images", "widths": [280, 280], "fit": "cover", "sizes": "(max-width: 180px) 180px, 170px", "loading": "eager", "format": "avif", "class": "mx-auto h-6 md:h-8" })}`)}</div><div class="flex items-center justify-between bg-white px-2 rounded-lg gap-4 border border-gray-400/60 py-1 mt-5 max-w-xl"><span class="text-xs">Don't see a payment method that works for you? We have other options.</span><a href="#" class="bg-blue-600 capitalize text-white py-2 px-3 rounded-lg flex items-center justify-center text-xs hover:bg-red-500 transition-all duration-75 hover:cursor-pointer">More options ${renderComponent($$result, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}</a></div></div></div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/education.astro", void 0);

const img1 = {"src":"/_astro/in-liquid-object-1.3ecd518d.svg","width":350,"height":295.6,"format":"svg"};

const img2 = {"src":"/_astro/in-liquid-object-2.9acc3eac.svg","width":350,"height":295.6,"format":"svg"};

const img3 = {"src":"/_astro/in-liquid-object-3.7cf8b7aa.svg","width":350,"height":295.6,"format":"svg"};

const icon1 = {"src":"/_astro/in-liquid-icon-1.94105e72.svg","width":72,"height":72,"format":"svg"};

const icon2 = {"src":"/_astro/in-liquid-icon-2.7f5ae5fa.svg","width":72,"height":72,"format":"svg"};

const icon3 = {"src":"/_astro/in-liquid-icon-3.47aee404.svg","width":72,"height":72,"format":"svg"};

const icon4 = {"src":"/_astro/in-liquid-icon-4.59f0daa9.svg","width":72,"height":72,"format":"svg"};

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Expert service",
      description: "Our highly skilled and dedicated support team are here to help whenever you need it.",
      icon: icon1
    },
    {
      title: "Fully regulated",
      description: "OptiGrowth Markets holds a global licence to trade currencies and procure payments.",
      icon: icon2
    },
    {
      title: "Financial advise",
      description: "Our finance consultants and managers are always on standby to support your investing needs.",
      icon: icon3
    },
    {
      title: "Integrated support",
      description: "24/7 Support, always available to help you. Just make use of the LiveChat if you need support.",
      icon: icon4
    }
  ];
  const moreFeatures = [
    {
      title: "Various Assets",
      description: "Trade your way with Opti-Growth Markets\u2019 web app for mobile and desktop. Trading hourly, daily or weekly provides unique opportunities.",
      img: img1
    },
    {
      title: "Market Analysis",
      description: "More than 100 most widely-used technical indicators and widgets. Control your trades with features like Stop Loss/Take Profit.",
      img: img2
    },
    {
      title: "Live Trading",
      description: "Select from a list of CFDs on widely traded assets representing a particular market sector or national economy.",
      img: img3
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between px-10 bg-black pt-12"><h2 class="text-3xl lg:text-2xl font-bold lg:tracking-tight text-white">
Save time. Get <strong class="text-blue-600">higher return</strong>.<br> Multiply
    wealth.
</h2>${renderComponent($$result, "Link", $$Link, { "size": "md", "style": "outline", "rel": "noopener", "href": "/user", "class": "flex gap-1 items-center justify-center text-sm", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
FIND OUT MORE
${renderComponent($$result2, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}` })}</div><div class="grid md:grid-cols-3 items-stretch gap-2 mx-auto justify-items-center justify-start py-6 px-10 bg-black">${moreFeatures.map((item) => renderTemplate`<div class="grid gap-2 max-w-xs bg-slate-600 max-h rounded-sm text-white"><div class="w-full">${renderComponent($$result, "Image", $$Image, { "src": item.img, "alt": item.title, "fit": "cover", "sizes": "(max-width: 180px) 280px, 270px", "loading": "eager", "format": "avif" })}</div><div class="p-5"><h2 class="text-xl lg:text-xl font-bold lg:tracking-tight mb-4">${item.title}</h2><p>${item.description}</p></div></div>`)}</div><!-- <div class="mt-16 md:mt-0">
  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    Everything you need to start a website
  </h2>
  <p class="text-lg mt-4 text-slate-600">
    Astro comes batteries included. It takes the best parts of state-of-the-art
    tools and adds its own innovations.
  </p>
</div> --><div class="grid sm:grid-cols-1 md:grid-cols-2 mt-16 gap-16 px-4">${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"><div class="mt-1 bg-black/10 rounded-full flex items-center justify-center  p-1 w-20 h-20 shrink-0">${renderComponent($$result, "Image", $$Image, { "src": item.icon, "alt": "Lowest fees", "sizes": "(max-width: 80px) 80px, 70px", "loading": "eager", "format": "avif" })}</div><div><h3 class="font-semibold text-lg">${item.title}</h3>${" "}<p class="text-slate-500 my-2 leading-relaxed">${item.description}</p><a href="#" class="flex gap-2 items-center text-xs hover:text-blue-500">
LEARN MORE ${renderComponent($$result, "Icon", $$Icon, { "name": "bi:arrow-right-short", "class": "w-4 h-4" })}</a></div></div>`)}</div><div class="max-w-4xl p-4 border border-gray-300 rounded-md mx-auto mb-8 mt-20 relative"><span class="absolute -top-3.5 bg-white px-2 left-1/3 text-lg">Simple steps to start trading</span><ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"><li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"><span class="grid gap-2 items-center justify-center justify-items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"><span class="mr-2 flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">1</span><span class="hidden sm:inline-flex sm:ml-2">Register Account</span></span></li><li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"><span class="grid gap-2 items-center justify-center justify-items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"><span class="mr-2 flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">2</span>
Fund your Account
</span></li><li class="flex items-center"><span class="grid gap-2 items-center justify-center justify-items-center"><span class="mr-2 flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">3</span>
Start your Trade
</span></li></ol></div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/features.astro", void 0);

const featIcon3 = {"src":"/_astro/fast-signal.f77a2a92.svg","width":512,"height":512,"format":"svg"};

const featIcon2 = {"src":"/_astro/global-access.fa117c58.svg","width":512,"height":512,"format":"svg"};

const featIcon1 = {"src":"/_astro/lowest-asset-icon.ec0a9f55.svg","width":512,"height":512,"format":"svg"};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate(_a || (_a = __template(["", `<main class="grid bg-fixed bg-no-repeat bg-center bg-cover" style="background-image: url(/in-liquid-slide-bg.png);"><main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24 px-10"><div class="py-6 md:order-1 hidden md:block"><!-- <Image
      src={heroImage}
      alt="Astronaut in the air"
      widths={[200, 400, 600]}
      aspectRatio="4:3"
      sizes="(max-width: 800px) 100vw, 620px"
      loading="eager"
      format="avif"
    /> --><div class="w-[640px] max-w-3xl h-[500px]"><!-- TradingView Widget BEGIN --><div class="tradingview-widget-container"><div class="tradingview-widget-container__widget"></div><!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> --><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js" async>
    {
    "symbols": [
      [
        "BITSTAMP:BTCUSD|1D"
      ],
      [
        "COINBASE:ETHUSD|1D"
      ],
      [
        "COINBASE:SOLUSD|1D"
      ],
      [
        "COINBASE:SHIBUSD|1D"
      ],
      [
        "COINBASE:DOGEUSD|1D"
      ]
    ],
    "chartOnly": false,
    "width": "100%",
    "height": "100%",
    "locale": "en",
    "colorTheme": "dark",
    "autosize": true,
    "showVolume": false,
    "showMA": false,
    "hideDateRanges": false,
    "hideMarketStatus": false,
    "hideSymbolLogo": false,
    "scalePosition": "right",
    "scaleMode": "Normal",
    "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
    "fontSize": "12",
    "noTimeScale": false,
    "valuesTracking": "1",
    "changeMode": "price-and-percent",
    "chartType": "area",
    "maLineColor": "#2962FF",
    "maLineWidth": 1,
    "maLength": 9,
    "lineWidth": 2,
    "lineType": 0,
    "dateRanges": [
      "1d|1",
      "1m|30",
      "3m|60",
      "12m|1D",
      "60m|1W",
      "all|1M"
    ]
  }
    <\/script></div><!-- TradingView Widget END --></div></div><div><h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
Trade currency pairs, Invest in Stocks.
</h1><p class="text-lg mt-4 text-slate-600 max-w-xl">
Join millions who've already discovered smarter<wbr> investing in multiple types of assets.
</p><div class="mt-6 flex flex-col sm:flex-row gap-3"><!-- <Link
        href="#"
        href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
        target="_blank"
        class="flex gap-1 items-center justify-center"
        rel="noopener">
        <Icon class="text-white w-5 h-5" name="bx:bxs-cloud-download" />

        Download for Free
      </Link> -->`, '</div></div></main><div class="flex gap-4 items-center justify-center mb-8 px-6"><div class="flex gap-4 items-start justify-center"><div class="mt-1 bg-black/10 rounded-full flex items-center justify-center p-1 w-20 h-20 shrink-0">', '</div><div><h3 class="font-semibold text-lg">Lowest fees</h3>', '<p class="text-slate-500 mt-2 leading-relaxed">We give you access to trading opportunities at low cost.</p></div></div><div class="flex gap-4 items-start justify-center"><div class="mt-1 bg-black/10 rounded-full flex items-center justify-center p-1 w-20 h-20 shrink-0">', '</div><div><h3 class="font-semibold text-lg">Global access</h3>', '<p class="text-slate-500 mt-2 leading-relaxed">Our platform can be accessed from anywhere around the world.</p></div></div><div class="flex gap-4 items-start justify-center"><div class="mt-1 bg-black/10 rounded-full flex items-center justify-center p-1 w-20 h-20 shrink-0">', '</div><div><h3 class="font-semibold text-lg">Fast Signals</h3>', '<p class="text-slate-500 mt-2 leading-relaxed">Trade and earn with our signals delivered directly to you.</p></div></div></div></main>'])), maybeRenderHead(), renderComponent($$result, "Link", $$Link, { "size": "md", "style": "outline", "rel": "noopener", "href": "/user", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
GET STARTED
` }), renderComponent($$result, "Image", $$Image, { "src": featIcon1, "alt": "Lowest fees", "sizes": "(max-width: 80px) 80px, 70px", "loading": "eager", "format": "avif" }), " ", renderComponent($$result, "Image", $$Image, { "src": featIcon2, "alt": "Global access", "sizes": "(max-width: 80px) 80px, 70px", "loading": "eager", "format": "avif" }), " ", renderComponent($$result, "Image", $$Image, { "src": featIcon3, "alt": "Lowest fees", "sizes": "(max-width: 80px) 80px, 70px", "loading": "eager", "format": "avif" }), " ");
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/hero.astro", void 0);

const Press1 = {"src":"/_astro/press-1.9b58d4b5.svg","width":3511.6,"height":574.4,"format":"svg"};

const Press2 = {"src":"/_astro/press-2.9fc667b7.svg","width":2500,"height":440,"format":"svg"};

const Press3 = {"src":"/_astro/press-3.8d9d61a5.svg","width":167.5,"height":31.5,"format":"svg"};

const Press4 = {"src":"/_astro/press-4.de8c6e87.svg","width":386.1,"height":92.9,"format":"svg"};

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logos;
  const press = [Press1, Press2, Press3, Press4];
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"><h2 class="text-center text-slate-500">We are in the press.</h2><div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">${press.map((item) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": item, "alt": "Press images", "fit": "cover", "sizes": "(max-width: 180px) 180px, 170px", "loading": "eager", "format": "avif", "class": "mx-auto h-8 md:h-10" })}`)}<!-- <Icon class="h-8 md:h-12" name="simple-icons:react" />
    <Icon class="h-8 md:h-12" name="simple-icons:svelte" />
    <Icon class="h-8 md:h-14" name="simple-icons:tailwindcss" />
    <Icon class="h-8 md:h-16" name="simple-icons:alpinedotjs" /> --></div></div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/logos.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Opti-Growth Markets | welcome" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Features", $$Features, {})}${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Cta", $$Cta, {})}${renderComponent($$result3, "Logos", $$Logos, {})}${renderComponent($$result3, "Education", $$Education, {})}` })}` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/index.astro", void 0);

const $$file$1 = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const OnboardForms = ({ children }) => {
  const [term, setTerm] = useState(false);
  const [view, setView] = useState("login");
  const [name, setName] = useState();
  const [regEmail, setRegEmail] = useState();
  const [regPassword, setRegPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoggingLoading, setIsLoggingLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    view === "login" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "Enter email address",
          className: "flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full",
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "password",
          type: "password",
          placeholder: "Enter password",
          className: "flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4",
          onChange: (e) => setPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full text-black justify-between items-center mt-2 px-1 mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm mr-10 hover:cursor-pointer", children: "Forgot password?" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "py-2 px-4 bg-blue-400 text-white",
            onClick: async () => {
              setIsLoggingLoading(true);
              await loginWithPass(email, password);
              setIsLoggingLoading(false);
            },
            children: isLoggingLoading ? "LOADING..." : "LOGIN"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-center text-black text-xs mx-auto px-4", children: "Not yet a member?" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setView("register"),
          className: "py-2 px-4 bg-blue-400 text-white mt-3 hover:bg-yellow-600/80",
          children: "REGISTER HERE"
        }
      )
    ] }),
    view === "register" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "text-black text-xs my-4", children: "To make things easier for you, we've simplified the Registration page. You can complete your profile after registration anytime." }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "First & Last name",
          className: "flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full",
          onChange: (e) => setName(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Enter email address",
          className: "flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4",
          onChange: (e) => setRegEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          placeholder: "Enter password",
          className: "flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4",
          onChange: (e) => setRegPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          placeholder: "Confirm password",
          className: "flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4",
          onChange: (e) => setConfirmPass(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-start mt-2 items-center justify-items-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            onChange: (e) => {
              console.log(e, ":::Event");
              setTerm(e.target.checked);
            },
            className: "w-4 h-4 text-black bg-white hover:cursor-pointer mr-2 rounded-sm border border-gray-500"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-black", children: [
          "I agree to the",
          " ",
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue", children: "Terms" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "py-2 px-4 bg-blue-400 text-white mt-4",
          onClick: async () => {
            try {
              setIsRegisterLoading(true);
              console.log(
                { name, regEmail, regPassword, confirmPass, term },
                ":::New User"
              );
              await registerNewUser({
                name,
                email: regEmail,
                password: regPassword,
                confirmPassword: confirmPass,
                term
              });
              setIsRegisterLoading(false);
              setView("login");
            } catch (e) {
              setIsRegisterLoading(false);
              window.alert(e.message ?? e.toString());
              throw new Error(e.message ?? e.toString());
            }
          },
          children: isRegisterLoading ? "LOADING..." : "REGISTER"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full text-black justify-between items-center mt-2 px-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm mr-10 hover:cursor-pointer", children: "Already a user?" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "py-2 px-4 bg-blue-400 text-white",
            onClick: () => {
              setView("login");
            },
            children: "SIGN IN"
          }
        )
      ] })
    ] })
  ] });
};

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (isLoggedIn()) {
    Astro2.redirect("/user/dashboard");
  } else {
    Astro2.redirect("/user");
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r bg-black from-blue-500 to-red-400 w-full h-screen text-white grid items-center justify-center justify-items-center"><div class="max-w-4xl w-screen h-[540px] max-h-fit bg-white mx-auto my-0 flex items-center justify-items-stretch rounded-md overflow-hidden"><div class="p-6 min-w-[320px] max-w-[320px] grid">${renderComponent($$result, "OnboardForms", OnboardForms, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/OnboardForms", "client:component-export": "default" })}</div><div class="flex-auto bg-contain bg-no-repeat bg-center bg-black/90 h-full" style="background-image: url(/user-side-bg.jpeg);"></div></div><div class="max-w-4xl w-screen items-start justify-end flex"><button class="text-sm">TERMS OF SERVICE</button><button>PRIVACY POLICY</button></div></div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/index.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/index.astro";
const $$url = "/user";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
