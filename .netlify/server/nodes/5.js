import * as server from '../entries/pages/gallery/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.68554123.js","_app/immutable/chunks/index.4192cf56.js","_app/immutable/chunks/atropos.min.e8751a6f.js"];
export const stylesheets = ["_app/immutable/assets/5.75a0cd46.css","_app/immutable/assets/atropos.6ee21719.css"];
export const fonts = [];
