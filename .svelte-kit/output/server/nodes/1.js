

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.876e14b0.js","_app/immutable/chunks/scheduler.7eeab9a1.js","_app/immutable/chunks/index.7ab94581.js","_app/immutable/chunks/singletons.58fc2ef3.js","_app/immutable/chunks/index.d6a74818.js"];
export const stylesheets = [];
export const fonts = [];
