

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.bba3270f.js","_app/immutable/chunks/index.4192cf56.js"];
export const stylesheets = ["_app/immutable/assets/4.220274b8.css"];
export const fonts = [];
