/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderSlot, i as renderComponent, F as Fragment } from '../astro_cb3aa52d.mjs';
import 'clsx';
import { a as $$Container, b as $$Icon, $ as $$Layout } from './404_3d16713a.mjs';

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}><h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}</h1><p class="text-lg mt-4 text-slate-600">${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}</p></div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
We are a the best platform to trade the markets for growth.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About Us` })}` })}${maybeRenderHead()}<div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12 justify-start"><div class="group text-left"><!-- <div class="w-full aspect-square">
              <Image
                src={teamMemberEntry.data.avatar.src}
                alt={teamMemberEntry.data.avatar.alt}
                sizes="(max-width: 800px) 100vw, 400px"
                widths={[200, 400]}
                aspectRatio="1:1"
                background="#ffffff"
                fit="cover"
                position="center"
                class="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div> --><div class="w-14 h-14 rounded-full bg-blue-500 grid items-center justify-center">${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:file", "class": "w-8 h-8 text-white" })}</div><div class="mt-4 text-start"><h2 class="text-lg text-gray-800">Terms of Service</h2><h3 class="text-sm text-slate-500">
Read the Terms of Service and License Agreement for Blockit as well
            as our BlockitApp & Developer Agreements.
</h3></div></div><div class="group text-left"><!-- <div class="w-full aspect-square">
              <Image
                src={teamMemberEntry.data.avatar.src}
                alt={teamMemberEntry.data.avatar.alt}
                sizes="(max-width: 800px) 100vw, 400px"
                widths={[200, 400]}
                aspectRatio="1:1"
                background="#ffffff"
                fit="cover"
                position="center"
                class="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div> --><div class="w-14 h-14 rounded-full bg-blue-500 grid items-center justify-center">${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:web", "class": "w-8 h-8 text-white" })}</div><div class="mt-4 text-start"><h2 class="text-lg text-gray-800">Policies</h2><h3 class="text-sm text-slate-500">
Find out more about what information we collect at Blockit, how we
            use it, and what control you have over your data.
</h3></div></div><div class="group text-left"><!-- <div class="w-full aspect-square">
              <Image
                src={teamMemberEntry.data.avatar.src}
                alt={teamMemberEntry.data.avatar.alt}
                sizes="(max-width: 800px) 100vw, 400px"
                widths={[200, 400]}
                aspectRatio="1:1"
                background="#ffffff"
                fit="cover"
                position="center"
                class="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div> --><div class="w-14 h-14 rounded-full bg-blue-500 grid items-center justify-center">${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:security", "class": "w-8 h-8 text-white" })}</div><div class="mt-4 text-start"><h2 class="text-lg text-gray-800">Security</h2><h3 class="text-sm text-slate-500">
Learn more about how we keep your work and personal data safe when
            you’re using our services.
</h3></div></div></div><div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"><h2 class="font-bold text-3xl text-gray-800">Who we are</h2><p class="text-lg leading-relaxed text-slate-500">
We are a driven, motivated people who believe that personal engagement
        is a sense of ownership, and a commitment to investing gives them
        control over financial future. OptiGrowth Markets has become one of the
        largest growing crypto/stock trading companies listed in CFD brokerage
        in the world.
</p><p class="text-lg leading-relaxed text-slate-500">
We have offices in over 8 countries including UK, China, Germany, France
        and Australia. We are also regulated by the world's biggest supervision
        authorities, always providing top-notch trading experience for our
        clients and becoming one of the best in the industry. We never settle
        for less as we help our customers grow!
</p></div>` })}` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/about.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, about as a };
