

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/7.7e30909d.js","_app/immutable/chunks/scheduler.7eeab9a1.js","_app/immutable/chunks/index.7ab94581.js"];
export const stylesheets = [];
export const fonts = [];
