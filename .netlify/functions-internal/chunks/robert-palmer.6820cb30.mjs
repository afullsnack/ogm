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

				const frontmatter = {"draft":false,"name":"Robert Palmer","title":"Marketing Engineer","avatar":{"src":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&fit=crop&w=280","alt":"Robert Palmer"},"publishDate":"2022-11-09 15:39"};
				const file = "/Users/fullsnack/Documents/play/bun/ogm/src/content/team/robert-palmer.md";
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
