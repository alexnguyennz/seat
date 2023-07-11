

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f49b3b29.js","_app/immutable/chunks/index.4192cf56.js","_app/immutable/chunks/Icon.cdd81f6d.js"];
export const stylesheets = [];
export const fonts = [];
