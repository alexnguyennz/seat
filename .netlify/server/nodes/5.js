import * as server from '../entries/pages/gallery/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.978363f1.js","_app/immutable/chunks/index.9cdf0179.js","_app/immutable/chunks/Carousel.ebd694f0.js","_app/immutable/chunks/tw-merge.b02e8c47.js"];
export const stylesheets = ["_app/immutable/assets/5.d0574b02.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
