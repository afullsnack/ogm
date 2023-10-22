/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, F as Fragment, m as maybeRenderHead } from '../astro_cb3aa52d.mjs';
import 'clsx';
import { a as $$Container, $ as $$Layout } from './404_3d16713a.mjs';
import { $ as $$Sectionhead } from './about_2d5c339b.mjs';
import 'html-escaper';
import 'svgo';
/* empty css                           */
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a here to help.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Support` })}` })}${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-12 mx-auto max-w-4xl mt-16"><div><h2 class="font-medium text-2xl text-gray-800">Address</h2><p class="text-lg leading-relaxed text-slate-500 mt-3">
142 Sycamore Dr, Kimberling City, Missouri (MO), 65686 United States
</p></div><div><h2 class="font-medium text-2xl text-gray-800">Email</h2><p class="text-lg leading-relaxed text-slate-500 mt-3 grid"><a href="mailto:support@optigrowthmarkets.com">support@optigrowthmarkets.com</a><small>FOR PUBLIC INQUIRIES</small></p></div></div><div class="mx-auto max-w-4xl mt-16 mb-10"><span class="text-lg font-bold text-gray-500/60">Have a question?</span><h2 class="font-bold text-4xl">Let's <b class="text-blue-600">get in touch</b></h2></div>` })}` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/contact.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
