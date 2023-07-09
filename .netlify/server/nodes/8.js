

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.3e4528c7.js","_app/immutable/chunks/index.9cdf0179.js"];
export const stylesheets = ["_app/immutable/assets/8.ac91c518.css"];
export const fonts = [];
