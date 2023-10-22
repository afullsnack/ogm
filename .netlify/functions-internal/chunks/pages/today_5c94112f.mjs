/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_cb3aa52d.mjs';
import { $ as $$Sectionhead } from './about_2d5c339b.mjs';
import { i as isLoggedIn, $ as $$DashboardLayout } from './dashboard_953be533.mjs';
import { atom } from 'nanostores';
import 'clsx';
import 'html-escaper';
import './404_3d16713a.mjs';
import 'svgo';
/* empty css                           */import 'react/jsx-runtime';
import 'react';
/* empty css                               */import '@nanostores/react';
import '@nanostores/persistent';
import 'lucide-react';
import 'pocketbase';

const $news = atom([]);
const fetchNews = async (skip = 0, limit = 20) => {
  const NEWS_DATA_URL = `https://api.coinstats.app/public/v1/news?skip=${skip}&limit=${limit}`;
  const result = await fetch(NEWS_DATA_URL);
  const json = await result.json();
  $news.set(json["news"]);
};

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Today = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Today;
  await fetchNews();
  if (!isLoggedIn()) {
    Astro2.redirect("/user");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result3) => renderTemplate`${maybeRenderHead()}<span class="text-sm font-normal text-white">Recent news on FX and crypto from around the world</span>`, "title": ($$result3) => renderTemplate`<h1 class="text-lg font-semibold text-white">News</h1>` })}<div class="w-full grid gap-3 relative items-center justify-center mt-10"><div class="w-[400px] grid gap-2 text-white">${$news.get().map((item) => {
    return renderTemplate`<a class="w-full p-4 grid bg-slate-950"${addAttribute(item.shareURL, "href")} target="_blank"><div class="flex items-center justify-between mb-2"><span class="text-xs">${item.source}</span><span class="text-right text-xs">${new Date(item.feedDate).toLocaleTimeString()}</span></div><span class="text-xs line-clamp-2">${item.description}</span></a>`;
  })}<!-- <div class="">

      </div> --></div></div>` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/today.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/today.astro";
const $$url = "/user/today";

export { $$Today as default, $$file as file, $$url as url };
