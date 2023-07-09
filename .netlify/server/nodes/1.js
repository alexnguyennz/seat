

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c9a85262.js","_app/immutable/chunks/index.9cdf0179.js"];
export const stylesheets = ["_app/immutable/assets/1.94f6b48b.css"];
export const fonts = [];
