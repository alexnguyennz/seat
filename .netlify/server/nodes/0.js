import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.48250c6a.js","_app/immutable/chunks/index.4192cf56.js","_app/immutable/chunks/singletons.d6b36745.js","_app/immutable/chunks/Icon.cdd81f6d.js"];
export const stylesheets = ["_app/immutable/assets/0.e52bc0df.css"];
export const fonts = [];
