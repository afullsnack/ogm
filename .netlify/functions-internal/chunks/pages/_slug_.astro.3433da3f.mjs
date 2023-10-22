/* empty css                         */import { j as createCollectionToGlobResultMap, k as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.f5b2d3c4.mjs';
import { $ as $$Layout, a as $$Container } from './404.astro.ade91ba1.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development.8951232f.mjs'),"/src/content/blog/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms.aa8ef7cb.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.5770eca3.mjs'),"/src/content/blog/kitchensink.mdx": () => import('../kitchensink.a0bb427e.mjs'),"/src/content/team/janette-lynch.md": () => import('../janette-lynch.f32904c4.mjs'),"/src/content/team/marcell-ziemann.md": () => import('../marcell-ziemann.a957821f.mjs'),"/src/content/team/robert-palmer.md": () => import('../robert-palmer.f7b1ff73.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"how-to-become-frontend-master":"/src/content/blog/how-to-become-frontend-master.md","complete-guide-fullstack-development":"/src/content/blog/complete-guide-fullstack-development.md","essential-data-structures-algorithms":"/src/content/blog/essential-data-structures-algorithms.md","kitchensink":"/src/content/blog/kitchensink.mdx"}},"team":{"type":"content","entries":{"marcell-ziemann":"/src/content/team/marcell-ziemann.md","janette-lynch":"/src/content/team/janette-lynch.md","robert-palmer":"/src/content/team/robert-palmer.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development.10e3da83.mjs'),"/src/content/blog/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms.c08b1998.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.c00a2f74.mjs'),"/src/content/blog/kitchensink.mdx": () => import('../kitchensink.601a2a12.mjs'),"/src/content/team/janette-lynch.md": () => import('../janette-lynch.39624b95.mjs'),"/src/content/team/marcell-ziemann.md": () => import('../marcell-ziemann.fcafbd69.mjs'),"/src/content/team/robert-palmer.md": () => import('../robert-palmer.dc935a92.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://astroship.web3templates.com");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="mx-auto max-w-3xl mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        ${entry.data.category}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        ${entry.data.title}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          ${entry.data.author}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400"${addAttribute(entry.data.publishDate.toISOString(), "datetime")}>
          ${entry.data.publishDate.toDateString()}
        </time>
        <span class="text-gray-400 hidden md:block">•</span>
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          ${entry.data.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)}
        </div>
      </div>
    </div>

    <div class="mx-auto prose prose-lg mt-6 max-w-3xl">
      ${renderComponent($$result3, "Content", Content, {})}
    </div>
    <div class="text-center mt-8">
      <a href="/user" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a>
    </div>
  ` })}
` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, getCollection as g };
