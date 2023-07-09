

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ec565c2e.js","_app/immutable/chunks/index.9cdf0179.js","_app/immutable/chunks/Icon.00104651.js"];
export const stylesheets = [];
export const fonts = [];
