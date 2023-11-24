import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.f280e35c.js","_app/immutable/chunks/scheduler.7eeab9a1.js","_app/immutable/chunks/index.7ab94581.js"];
export const stylesheets = [];
export const fonts = [];
