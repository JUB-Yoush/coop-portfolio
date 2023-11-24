import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article><h1>${escape(data.title)}</h1> ${data.wip == "false" ? `<p>Published: ${escape(data.date)}</p> ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `<p data-svelte-h="svelte-16mzvx5">Still writing this one!</p>`}</article>`;
});
export {
  Page as default
};
