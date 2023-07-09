import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.47303e1a.js","_app/immutable/chunks/index.9cdf0179.js","_app/immutable/chunks/singletons.a690b0da.js","_app/immutable/chunks/index.1153a3ff.js","_app/immutable/chunks/Icon.00104651.js"];
export const stylesheets = ["_app/immutable/assets/0.d53e141c.css"];
export const fonts = [];
