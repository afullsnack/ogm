export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';
import './astro_cb3aa52d.mjs';
import 'clsx';
import 'html-escaper';

const page = () => import('./pages/about_2d5c339b.mjs').then(n => n.a);

export { page };
