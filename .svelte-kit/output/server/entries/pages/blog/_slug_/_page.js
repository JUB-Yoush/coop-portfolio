const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../books1.md": () => import("../../../../chunks/books1.js"), "../htn23.md": () => import("../../../../chunks/htn23.js"), "../study.md": () => import("../../../../chunks/study.js") }), `../${params.slug}.md`);
  const { title, date, wip } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    wip,
    date
  };
}
export {
  load
};
