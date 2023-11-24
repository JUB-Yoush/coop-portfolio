

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/3.e1aaf3e1.js","_app/immutable/chunks/scheduler.7eeab9a1.js","_app/immutable/chunks/index.7ab94581.js"];
export const stylesheets = [];
export const fonts = [];
