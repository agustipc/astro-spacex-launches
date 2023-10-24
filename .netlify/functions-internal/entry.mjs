import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_080adece.mjs';
import 'preact';
import './chunks/astro_701ba71e.mjs';
import './chunks/pages/image-endpoint_4d816376.mjs';

const _page0  = () => import('./chunks/image-endpoint_f2a24d9b.mjs');
const _page1  = () => import('./chunks/index_a6951f93.mjs');
const _page2  = () => import('./chunks/example_8c6a6e4e.mjs');
const _page3  = () => import('./chunks/_id__53144408.mjs');
const _page4  = () => import('./chunks/about_14ac61f4.mjs');
const _page5  = () => import('./chunks/content_96bd690d.mjs');
const _page6  = () => import('./chunks/404_913ac8cb.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.10/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/example.html", _page2],["src/pages/launch/[id].astro", _page3],["src/pages/about.astro", _page4],["src/pages/blog/content.md", _page5],["src/pages/404.astro", _page6]]);
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
