import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0a008a3f.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_cb3aa52d.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_5bfe2eae.mjs');
const _page1  = () => import('./chunks/index_e0f916b6.mjs');
const _page2  = () => import('./chunks/contact_485c02c0.mjs');
const _page3  = () => import('./chunks/about_a85a004c.mjs');
const _page4  = () => import('./chunks/terms_31f9cbb5.mjs');
const _page5  = () => import('./chunks/trade_c2332a33.mjs');
const _page6  = () => import('./chunks/_slug__701cff2a.mjs');
const _page7  = () => import('./chunks/blog_efcf2481.mjs');
const _page8  = () => import('./chunks/index_fcf80e67.mjs');
const _page9  = () => import('./chunks/dashboard_d81e28a1.mjs');
const _page10  = () => import('./chunks/settings_b82a28c1.mjs');
const _page11  = () => import('./chunks/history_81697abf.mjs');
const _page12  = () => import('./chunks/today_1f38ef29.mjs');
const _page13  = () => import('./chunks/404_7f412c0f.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/terms.astro", _page4],["src/pages/trade.astro", _page5],["src/pages/blog/[slug].astro", _page6],["src/pages/blog.astro", _page7],["src/pages/user/index.astro", _page8],["src/pages/user/dashboard.astro", _page9],["src/pages/user/settings.astro", _page10],["src/pages/user/history.astro", _page11],["src/pages/user/today.astro", _page12],["src/pages/404.astro", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
