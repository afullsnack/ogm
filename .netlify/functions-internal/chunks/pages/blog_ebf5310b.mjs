import '@astrojs/internal-helpers/path';
/* empty css                           */import { e as createAstro, f as createComponent, A as AstroError, q as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, i as renderComponent, F as Fragment } from '../astro_cb3aa52d.mjs';
import { a as $$Container, $ as $$Layout } from './404_3d16713a.mjs';
import { $ as $$Sectionhead } from './about_2d5c339b.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_8fcba614.mjs';
import 'clsx';
import { g as getCollection } from './_slug__8878df8b.mjs';

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro/components/Image.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/Users/fullsnack/Documents/play/bun/ogm/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/fullsnack/Documents/play/bun/ogm/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
We write about building startups and thoughts going on our mind.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Our Blog` })}` })}${maybeRenderHead()}<main class="mt-16"><ul class="grid gap-16 max-w-4xl mx-auto">${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<li><a${addAttribute(`/user/${blogPostEntry.slug}`, "href")}><div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">${renderComponent($$result3, "Image", $$Image, { "src": blogPostEntry.data.image.src, "alt": blogPostEntry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 800px", "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md" })}<div><span class="text-blue-400 uppercase tracking-wider text-sm font-medium">${blogPostEntry.data.category}</span><h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 ">${blogPostEntry.data.title}</h2><div class="flex gap-2 mt-3"><span class="text-gray-400">${blogPostEntry.data.author}</span><span class="text-gray-400">• </span><time class="text-gray-400"${addAttribute(blogPostEntry.data.publishDate.toISOString(), "datetime")}>${blogPostEntry.data.publishDate.toDateString()}</time></div></div></div></a></li>`)}</ul></main>` })}` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/blog.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, blog as b, imageConfig as i };
