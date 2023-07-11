

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/greenseat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.e892ad7a.js","_app/immutable/chunks/index.4192cf56.js","_app/immutable/chunks/Seat.3c72824a.js"];
export const stylesheets = ["_app/immutable/assets/Seat.be418a79.css"];
export const fonts = [];
