/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.f5b2d3c4.mjs';
import { i as isLoggedIn, $ as $$DashboardLayout } from './dashboard.astro.7c60b8a0.mjs';
import 'react/jsx-runtime';
import 'react';
import './404.astro.ade91ba1.mjs';
import 'fs';
import 'path';
import 'os';
import 'url';
/* empty css                         *//* empty css                               */import '@nanostores/react';
import '@nanostores/persistent';
import 'nanostores';
import 'lucide-react';
import 'pocketbase';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$History = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$History;
  if (!isLoggedIn()) {
    Astro2.redirect("/user");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<h1 class="text-white">History</h1>
` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/history.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/history.astro";
const $$url = "/user/history";

export { $$History as default, $$file as file, $$url as url };
