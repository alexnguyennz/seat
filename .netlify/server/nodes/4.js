

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.7c02a55c.js","_app/immutable/chunks/index.9cdf0179.js"];
export const stylesheets = ["_app/immutable/assets/4.220274b8.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
