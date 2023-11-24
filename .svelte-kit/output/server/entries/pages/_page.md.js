import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="home-content flex flex-column " data-svelte-h="svelte-1p8n4zt"><h1>Jayden Brooks</h1> <img class="home-gif mw7 w-50 h-auto" style="" src="pfp.jpg" alt=""> <p>Hello!</p> <p>I’m Jayden, a computer science student at the Lassonde school of Engineering (a part of York University)</p> <p>While you’re here, feel free to learn more <a href="/about">about me</a> about me, check out what I’m <a href="/projects">up to</a> or what I’m <a href="/blog">thinking about</a>.</p> <p>If you’re a recruiter who’s found this link though my linkedin or resume, then you should definitely consider <a href="/resume">hiring</a> me, currently interning at Scotiabank, but looking for Winter and Summer 2024 positions.</p> <p>Regardless, thanks for checking out my site, feel free to reach out!</p> <p>Also, if you go to York and are interested in game development, <a href="https://www.gdyu.club/" rel="nofollow">gdyu.club</a></p></div>`;
});
export {
  Page as default
};
