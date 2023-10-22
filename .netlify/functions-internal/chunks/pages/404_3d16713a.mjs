/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderSlot, s as spreadAttributes, u as unescapeHTML, i as renderComponent, F as Fragment, j as defineScriptVars, k as renderHead } from '../astro_cb3aa52d.mjs';
import 'clsx';
import { optimize } from 'svgo';
/* empty css                           */
const $$Astro$q = createAstro("https://astroship.web3templates.com");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/container.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$p = createAstro("https://astroship.web3templates.com");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$o = createAstro("https://astroship.web3templates.com");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$n = createAstro("https://astroship.web3templates.com");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$m = createAstro("https://astroship.web3templates.com");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$l = createAstro("https://astroship.web3templates.com");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/ui/link.astro", void 0);

const $$Astro$k = createAstro("https://astroship.web3templates.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-700 mt-10"><div class="bg-slate-800 w-full"><div class="flex items-center gap-14 mx-auto max-w-4xl py-4 justify-center text-white"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:update", "class": "w-6 h-6" })}<h4 class="text-sm font-normal">Active Account Managers</h4></div><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:trophy", "class": "w-6 h-6" })}<h4 class="text-sm font-normal">15+ Global Recognitions</h4></div><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:phone", "class": "w-6 h-6" })}<h4 class="text-sm font-normal">24/7 Customer Support</h4></div></div></div><div class="flex gap-2 items-start justify-start mx-auto my-5 text-slate-400 max-w-4xl"><a href="https://facebook.com">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:facebook-box", "class": "w-5 h-5" })}</a><a href="https://twiiter.com">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:twitter", "class": "w-5 h-5" })}</a><a href="https://youtube.com">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:youtube", "class": "w-5 h-5" })}</a><a href="https://instagram.com">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:instagram", "class": "w-5 h-5" })}</a><a href="https://telegram.com">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:telegram", "class": "w-5 h-5" })}</a></div><div class="grid md:grid-cols-4 items-start gap-4 mx-auto max-w-4xl py-8 justify-start"><div class="text-slate-200"><h4 class="font-bold text-md mb-2">MARKETS</h4><ul class="text-sm font-light"><li>Share CFDs</li><li>Forex</li><li>Indeces</li><li>Cryptocurrency</li></ul></div><div class="text-slate-200"><h4 class="font-bold text-md mb-2">TRADING PLATFORMS</h4><ul class="text-sm font-light"><li>Web platform</li><li>Trading apps</li><li>MetaTrader 5</li><li>Compare features</li></ul></div><div class="text-slate-200"><h4 class="font-bold text-md mb-2">ACCOUNT TYPES</h4><ul class="text-sm font-light"><li>Demo account</li><li>Standard account</li><li>ECN account</li><li>Family account</li></ul></div><div class="text-slate-200"><h4 class="font-bold text-md mb-2">LEARN TO TRADE</h4><ul class="text-sm font-light"><li>News and trade ideas</li><li>Trading strategy</li><li>Forex trading course</li></ul></div></div><div class="py-10 max-w-4xl mx-auto"><p class="text-start text-sm text-slate-200">
Copyright © ${( new Date()).getFullYear()} Opti Growth Markets. All rights reserved.
</p><div><p class="text-start text-xs text-slate-300 mt-1">
Made by <a href="https://web3templates.com" target="_blank" rel="noopener" class="hover:underline">
Web3Templates
</a></p><hr class="mt-2"></div><p class="text-start text-xs text-slate-300 mt-5">
You can start your online trading today with OptiGrowth Markets. Please
      feel free to browse our economic calendar. It contains important
      information on EURUSD, BTCUSD, GBPUSD, USDCHF, BTCETH, AUDUSD, USDCAD,
      NZDUSD and other currency pairs and trading instruments and provides
      up-to-date market news and market research. OptiGrowth Markets offers a
      deposit forex bonus of up to 50%*. You can trade micro-lots (0.01 lots)
      with OptiGrowth Markets.
</p></div></footer>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$j = createAstro("https://astroship.web3templates.com");
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$i = createAstro("https://astroship.web3templates.com");
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu">${renderSlot($$result, $$slots["default"], renderTemplate`<svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Toggle Menu</title><path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path><path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path></svg>`)}</button>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$h = createAstro("https://astroship.web3templates.com");
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$g = createAstro("https://astroship.web3templates.com");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$f = createAstro("https://astroship.web3templates.com");
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</nav>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$e = createAstro("https://astroship.web3templates.com");
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$d = createAstro("https://astroship.web3templates.com");
const $$DropdownSubmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$c = createAstro("https://astroship.web3templates.com");
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$b = createAstro("https://astroship.web3templates.com");
const $$StickyHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = ""
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", ">", "</header><script>(function(){", '\nlet scrollPos = 0;\nlet ticking = false;\n\nfunction OnScroll(scrollPos) {\n  const headers = document.querySelectorAll(".astronav-sticky-header");\n  const classArray = activeClass.split(" ");\n  const replaceArray = defaultClass.split(" ");\n\n  headers.forEach((header) => {\n    if (scrollPos > scrollY) {\n      header.classList.remove(...replaceArray);\n      header.classList.add("is-active", ...classArray);\n      header.setAttribute("active", "");\n    }\n    //reduce the scrollY to avoid flickering when scrolling up\n    if (scrollPos < Math.max(scrollY - 20, 0)) {\n      header.classList.remove("is-active", ...classArray);\n      header.classList.add(...replaceArray);\n      header.removeAttribute("active");\n    }\n  });\n}\n\n// Scroll event throttling as per MDN\n// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event\n\ndocument.addEventListener("scroll", (event) => {\n  scrollPos = window.scrollY;\n  if (!ticking) {\n    window.requestAnimationFrame(() => {\n      OnScroll(scrollPos);\n      ticking = false;\n    });\n\n    ticking = true;\n  }\n});\n})();<\/script>'])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const $$Astro$a = createAstro("https://astroship.web3templates.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Features",
      path: "#",
      children: [
        { title: "Action", path: "/" },
        { title: "Another action", path: "#" },
        { title: "Dropdown Submenu", path: "#" },
        { title: "404 Page", path: "/404" }
      ]
    },
    // {
    //   title: "Pricing",
    //   path: "/pricing",
    // },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Trade Markets",
      path: "/trade"
    },
    {
      title: "Support",
      path: "/contact"
    },
    {
      title: "Terms",
      path: "/terms"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5">${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate`<div class="flex w-full lg:w-auto items-center justify-between"><a href="/" class="text-lg"><span class="font-bold text-slate-800">Opti-Growth</span><span class="text-slate-500"> Markets</span></a><div class="block lg:hidden" id="menu-btn">${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800" })}</div></div>${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0 menu-toggle" }, { "default": ($$result4) => renderTemplate`<ul class="flex flex-col lg:flex-row lg:gap-3">${menuitems.map((item, index) => (
    // <>
    // {item.children && (
    //   <Dropdown
    //     title={item.title}
    //     children={item.children}
    //     lastItem={index === menuitems.length - 1}
    //   />
    // )}
    // </>
    renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${!item.children && renderTemplate`<li><a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">${item.title}</a></li>`}` })}`
  ))}</ul><div class="lg:hidden flex items-center mt-3 gap-4">${renderComponent($$result4, "Link", $$Link, { "href": "/user", "size": "md", "block": true }, { "default": ($$result5) => renderTemplate`CREATE ACCOUNT` })}${renderComponent($$result4, "Link", $$Link, { "href": "/user", "style": "muted", "block": true, "size": "md" }, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "Icon", $$Icon, { "name": "bi:person-circle", "class": "w-4 h-4" })}` })}</div>` })}` })}<div><div class="hidden lg:flex items-center gap-4">${renderComponent($$result2, "Link", $$Link, { "href": "/user", "size": "md", "block": true, "class": "text-xs" }, { "default": ($$result3) => renderTemplate`CREATE ACCOUNT` })}${renderComponent($$result2, "Link", $$Link, { "href": "/user", "style": "muted", "block": true, "class": "w-10 h-10 grid items-center justify-center", "size": "md" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "bi:person-circle", "class": "w-4 h-4" })}` })}</div></div></header>` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/components/navbar/navbar.astro", void 0);

const $$Astro$9 = createAstro("https://astroship.web3templates.com");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://astroship.web3templates.com");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://astroship.web3templates.com");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://astroship.web3templates.com");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://astroship.web3templates.com");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? `${title} | Astroship` : "Astroship - Starter Template for Astro with Tailwind CSS";
  return renderTemplate(_a || (_a = __template(['<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->', "", "</head><body>", "", "", '<!-- Tidio chat code --><script src="//code.tidio.co/iq2qipotps6urp8h4c4yzwhytrpdoxia.js" async><\/script></body></html>'])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "Opti-Growth - Trade Crypto and Forex markets with ease, and flexible membership starters", "canonical": canonicalURL, "twitter": {
    creator: "@surjithctly",
    site: "@web3templates",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Opti-Growth - Trade Crypto and Forex markets with ease`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Opti-Growth Homepage Screenshot"
    }
  } }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/fullsnack/Documents/play/bun/ogm/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="min-h-[calc(100vh-16rem)] flex items-center justify-center"><div class="mt-16 text-center"><h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">404</h1><p class="text-lg mt-4 text-slate-600">Page not found.</p><a href="/" class="text-blue-600 hover:underline">Please check back at the home page</a></div></div>` })}` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/404.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$Container as a, $$Icon as b, $$DropdownItems as c, $$Dropdown as d, $$Link as e };
