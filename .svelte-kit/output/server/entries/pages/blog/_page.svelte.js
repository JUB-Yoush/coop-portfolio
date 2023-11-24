import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-dbxyy8">Blog</h1> <ul>${each(data.posts, (post) => {
    return `<li><h2><a${add_attribute("href", post.path, 0)}>${escape(post.meta.title)} </a></h2>
		  Published ${escape(post.meta.date)} </li>`;
  })}</ul>`;
});
export {
  Page as default
};
