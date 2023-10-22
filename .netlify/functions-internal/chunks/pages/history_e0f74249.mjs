/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_cb3aa52d.mjs';
import 'clsx';
import { i as isLoggedIn, $ as $$DashboardLayout } from './dashboard_953be533.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
import './404_3d16713a.mjs';
import 'svgo';
/* empty css                           *//* empty css                               */import '@nanostores/react';
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
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="text-white">History</h1>` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/history.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/history.astro";
const $$url = "/user/history";

export { $$History as default, $$file as file, $$url as url };
