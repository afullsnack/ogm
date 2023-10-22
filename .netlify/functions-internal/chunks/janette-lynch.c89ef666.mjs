import { p as createVNode, F as Fragment, s as spreadAttributes } from './astro.f5b2d3c4.mjs';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"draft":false,"name":"Janette Lynch","title":"Senior Director","avatar":{"src":"https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=280","alt":"Janette Lynch"},"publishDate":"2022-11-07 15:39"};
				const file = "/Users/fullsnack/Documents/play/bun/ogm/src/content/team/janette-lynch.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
