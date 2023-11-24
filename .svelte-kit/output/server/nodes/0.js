import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.46f45334.js","_app/immutable/chunks/scheduler.7eeab9a1.js","_app/immutable/chunks/index.7ab94581.js","_app/immutable/chunks/index.d6a74818.js"];
export const stylesheets = ["_app/immutable/assets/0.c2f9ba13.css"];
export const fonts = [];
