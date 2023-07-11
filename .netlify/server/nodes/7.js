

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/orangeseat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.55c558dc.js","_app/immutable/chunks/index.4192cf56.js","_app/immutable/chunks/Seat.3c72824a.js"];
export const stylesheets = ["_app/immutable/assets/Seat.be418a79.css"];
export const fonts = [];
