import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/books1.md": () => import("../../../../chunks/books1.js"), "/src/routes/blog/htn23.md": () => import("../../../../chunks/htn23.js"), "/src/routes/blog/study.md": () => import("../../../../chunks/study.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    // format the data to make it easy to work with
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedPosts);
};
export {
  GET
};
