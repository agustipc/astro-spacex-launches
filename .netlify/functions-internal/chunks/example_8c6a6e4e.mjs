export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';

const page = () => import('./prerender_7ed33791.mjs').then(n => n.e);

export { page };
