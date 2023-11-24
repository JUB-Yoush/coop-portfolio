

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/6.e843048f.js","_app/immutable/chunks/scheduler.7eeab9a1.js","_app/immutable/chunks/index.7ab94581.js"];
export const stylesheets = [];
export const fonts = [];
