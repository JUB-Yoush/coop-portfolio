import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const tachyons = "";
const global = "";
const theme_index_store = writable(0);
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-2magb6{background-color:var(--background-color);color:var(--color)}a.svelte-2magb6:hover{color:var(--hover-color)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme_index_store;
  $$unsubscribe_theme_index_store = subscribe(theme_index_store, (value) => value);
  const themes = ["plain", "mint", "s.berry", "banana", "peanut", "grape", "melon"];
  let theme_index = 0;
  theme_index_store.subscribe((index) => theme_index = index);
  $$result.css.add(css);
  $$unsubscribe_theme_index_store();
  return `<link href="https://fonts.googleapis.com/css?family=Spline Sans Mono" rel="stylesheet" class="svelte-2magb6"> <div class="border pt4-ns svelte-2magb6" data-svelte-h="svelte-1wi860e"><div class="svelte-2magb6">----------------------------</div></div> <body class="ma2 flex flex-column justify-center items-center svelte-2magb6"><div class="mr-auto ml-auto flex flex-column flex-row-ns svelte-2magb6"><div class="mt3 tr flex flex-row flex-wrap flex-column-ns svelte-2magb6"><div class="mt2 mr3 svelte-2magb6" data-svelte-h="svelte-1ow88m4"><a class=" svelte-2magb6" href="/">home</a></div> <div class="mt2 mr3 svelte-2magb6" data-svelte-h="svelte-3jshz9"><a class=" svelte-2magb6" href="/about">about</a></div> <div class="mt2 mr3 svelte-2magb6" data-svelte-h="svelte-1b8uae6"><a class=" svelte-2magb6" href="/resume">hire me</a></div> <div class="mt2 mr3 svelte-2magb6" data-svelte-h="svelte-eebh4z"><a class=" svelte-2magb6" href="/projects">projects</a></div> <div class="mt2 mr3 svelte-2magb6" data-svelte-h="svelte-1elc21f"><a class=" svelte-2magb6" href="/blog">blog</a></div> <div class="site-flavor mt2 mr3 svelte-2magb6"><a class="pointer underline svelte-2magb6">${escape(themes[theme_index])}</a></div></div> <div class="mw6 svelte-2magb6" style="max-width:50rem">${slots.default ? slots.default({}) : ``}</div></div> <div class="border svelte-2magb6" data-svelte-h="svelte-1i0yu8x"><div class="svelte-2magb6">----------------------------</div></div> <div class="links svelte-2magb6" data-svelte-h="svelte-1aujipy"><a class=" svelte-2magb6" href="mailto:jayden.patrick.brooks@gmail.com" target="_blank">email</a> <a class=" svelte-2magb6" href="https://www.linkedin.com/in/jaydenpb/" target="_blank">linkedin</a> <a class=" svelte-2magb6" href="https://github.com/JUB-Yoush" target="_blank">github</a> <a class=" svelte-2magb6" href="https://yoush.itch.io/" target="_blank">itch.io</a></div></body>`;
});
export {
  Layout as default
};
