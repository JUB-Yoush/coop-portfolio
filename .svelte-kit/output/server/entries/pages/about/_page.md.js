import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const hobbies = [
    "remaking this website",
    "still modding Nintendo stuff",
    "learning another VScode Vim shortcut",
    "breaking my linux installation",
    "dreaming about being cool enough to use Raylib",
    "finishing my drawabox homework",
    "learning about the Godot engine",
    "playing the piano",
    "making jazz playlists",
    "thinking about turn-based RPGs",
    "making up new serves in ping pong",
    "mashing in Guilty Gear",
    "reading the new One Piece chapter",
    "emulating retro games",
    "beating my cybergrind high-score",
    "wishing they'd port Final Fantasy Tactics",
    "trying to put on 5 lbs of muscle",
    "designing Mercury Man lore"
  ];
  let order = [];
  let current_hobby = "";
  function shuffle_order() {
    while (order.length < hobbies.length) {
      let rng = Math.floor(Math.random() * hobbies.length);
      if (!order.includes(rng)) {
        order.push(rng);
      }
    }
    next_hobby();
  }
  function next_hobby() {
    current_hobby = hobbies[order.pop()];
    if (order.length == 0) {
      shuffle_order();
    }
  }
  shuffle_order();
  return `<div class="home-content flex flex-column "><h1 data-svelte-h="svelte-hbz7zl">About Me</h1> <img class="mw7 w-41 h-auto" src="gdyu.jpg" alt=""> <a class="source" href="https://www.gdyu.club/" target="_blank" data-svelte-h="svelte-nv9np6">The GDYU team at yorkfest.</a> <p data-svelte-h="svelte-1tdc3zk">I’m Jayden, a computer science student at York University.
I’m a certified digital thingamabob maker (software developer to some people)</p> <p data-svelte-h="svelte-w065f4">I’ve been in love with programming and creating with computers since modifying old Nintendo games and consoles with fan-made hacking tools.</p> <p data-svelte-h="svelte-v86gy6">I got my start proper with using Gamemaker 8 in grade 10 to make simple games, and that’s when my interest in programming really began.</p> <p data-svelte-h="svelte-dzbsi6">Since then I’ve founded York’s game development club (<a href="https://www.gdyu.club/" rel="nofollow">gdyu.club</a>), learned full-stack development, got good at OOP, and have experience with many different tools and languages (see my <a href="/resume">resume!!</a>).</p> <p data-svelte-h="svelte-satnuu">I’m a fan of programming in many forms, and am always looking for opportunities to use code to make interesting, expressive, artistic, and cool stuff.</p> <p data-svelte-h="svelte-rfpm7b">Trying to become a great developer. One who makes software that improves peoples lives, and is able to inspire others.</p> <p>When I’m not looking for work or running my club, you can find me <a class="hobby-anchor" href="javascript:;">${escape(current_hobby)}.</a></p></div>`;
});
export {
  Page as default
};
