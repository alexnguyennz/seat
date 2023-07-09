

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/yellowseat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.22d2cdc4.js","_app/immutable/chunks/index.9cdf0179.js","_app/immutable/chunks/Seat.c4eb9189.js","_app/immutable/chunks/index.1153a3ff.js","_app/immutable/chunks/tw-merge.b02e8c47.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/Seat.be418a79.css"];
export const fonts = [];
