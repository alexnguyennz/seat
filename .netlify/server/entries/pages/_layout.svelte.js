import { g as getContext, c as create_ssr_component, v as validate_component, b as subscribe, d as add_classes, e as escape } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
const main = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const IconChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M6 9l6 6l6 -6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconChevronDown$1 = IconChevronDown;
const IconMenu2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M4 6l16 0" }],
    ["path", { "d": "M4 12l16 0" }],
    ["path", { "d": "M4 18l16 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconMenu2$1 = IconMenu2;
const IconMessageCircle2Filled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M5.821 4.91c3.898 -2.765 9.469 -2.539 13.073 .536c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.232 -.101l-4.375 .931l-.075 .013l-.11 .009l-.113 -.004l-.044 -.005l-.11 -.02l-.105 -.034l-.1 -.044l-.076 -.042l-.108 -.077l-.081 -.074l-.073 -.083l-.053 -.075l-.065 -.115l-.042 -.106l-.031 -.113l-.013 -.075l-.009 -.11l.004 -.113l.005 -.044l.02 -.11l.022 -.072l1.15 -3.451l-.022 -.036c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168z",
        "stroke-width": "0",
        "fill": "currentColor"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "message-circle-2-filled" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconMessageCircle2Filled$1 = IconMessageCircle2Filled;
const IconX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6l-12 12" }], ["path", { "d": "M6 6l12 12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconX$1 = IconX;
const ChairLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  {
    if ($page.url.pathname.startsWith("/yellowseat"))
      ;
    else if ($page.url.pathname === "/blueseat")
      ;
    else if ($page.url.pathname === "/greenseat")
      ;
    else if ($page.url.pathname === "/orangeseat")
      ;
    else
      ;
  }
  $$unsubscribe_page();
  return `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="111" version="1.0" viewBox="0 0 200 279">${``}</svg>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".active.svelte-1n72bbj{position:relative}.active.svelte-1n72bbj:before{content:'';position:absolute;width:0;bottom:-5px;left:0;height:4px;background-color:#1d4ed8;animation:svelte-1n72bbj-animation 0.25s forwards}@keyframes svelte-1n72bbj-animation{0%{width:0}100%{width:100%}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { pathname = "" } = $$props;
  let toggle = false;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  $$result.css.add(css$1);
  {
    toggle = false;
  }
  $$unsubscribe_page();
  return `<header class="mb-20"><div class="container mx-auto mt-3 flex items-center justify-between px-5"><div class="flex items-center gap-5"><a href="/" aria-label="home page">${validate_component(ChairLogo, "ChairLogo").$$render($$result, { pathname }, {}, {})}</a>

			<button class="lg:hidden" aria-label="toggle mobile menu">${!toggle ? `${validate_component(IconMenu2$1, "IconMenu2").$$render($$result, { class: "h-6 w-6" }, {}, {})}` : `${validate_component(IconX$1, "IconX").$$render($$result, { class: "h-6 w-6" }, {}, {})}`}</button></div>

		<nav class="hidden lg:block"><ul class="flex gap-8 text-xl text-gray-700"><li class="${["svelte-1n72bbj", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="/">Home</a></li>
				<li class="${["svelte-1n72bbj", $page.url.pathname === "/blueseat" ? "active" : ""].join(" ").trim()}"><a href="/blueseat">Blue Seat</a></li>
				<li class="group relative"><a href="/yellowseat" class="${[
    "flex items-center justify-between gap-1 svelte-1n72bbj",
    $page.url.pathname.startsWith("/yellowseat") ? "active" : ""
  ].join(" ").trim()}">Yellow Seat ${validate_component(IconChevronDown$1, "IconChevronDown").$$render(
    $$result,
    {
      stroke: 3,
      class: "h-5 w-5 transition group-hover:-rotate-180"
    },
    {},
    {}
  )}</a>

					<ul class="invisible absolute z-10 mx-auto w-48 scale-75 space-y-2 rounded-md pb-6 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100"><li><a href="/yellowseat/menus"${add_classes(($page.url.pathname === "/yellowseat/menus" ? "subactive" : "").trim())}>Catering Menus</a></li>
						<li><a href="/yellowseat/venues"${add_classes(($page.url.pathname === "/yellowseat/venues" ? "subactive" : "").trim())}>Partner Venues</a></li></ul></li>
				<li class="${["svelte-1n72bbj", $page.url.pathname === "/orangeseat" ? "active" : ""].join(" ").trim()}"><a href="/orangeseat">Orange Seat</a></li>
				<li class="${["svelte-1n72bbj", $page.url.pathname === "/greenseat" ? "active" : ""].join(" ").trim()}"><a href="/greenseat">Green Seat</a></li>
				<li class="group relative"><span class="${[
    "flex cursor-default items-center justify-between gap-1 transition hover:text-blue-700 svelte-1n72bbj",
    $page.url.pathname === "/team" || $page.url.pathname === "/gallery" ? "active" : ""
  ].join(" ").trim()}">About ${validate_component(IconChevronDown$1, "IconChevronDown").$$render(
    $$result,
    {
      stroke: 3,
      class: "h-5 w-5 transition group-hover:-rotate-180"
    },
    {},
    {}
  )}</span>

					<ul class="invisible absolute z-10 mx-auto w-48 scale-75 space-y-2 rounded-md pb-6 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100"><li${add_classes(($page.url.pathname === "/team" ? "subactive" : "").trim())}><a href="/team">Our team</a></li>
						<li${add_classes(($page.url.pathname === "/gallery" ? "subactive" : "").trim())}><a href="/gallery">Gallery</a></li></ul></li></ul></nav>

		<a href="/contact" class="rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-3 text-xl font-medium text-white transition-all hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">Get in touch</a></div>

	
	<nav class="mt-6 lg:hidden">${toggle ? `<ul class="flex w-full flex-col gap-5 bg-gray-100 p-5 text-xl text-gray-700"><li class="${["svelte-1n72bbj", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="/" class="block">Home</a></li>
				<li class="${["svelte-1n72bbj", $page.url.pathname === "/blueseat" ? "active" : ""].join(" ").trim()}"><a href="/blueseat" class="block">Blue Seat</a></li>
				<li class="group relative"><a href="/yellowseat" class="${[
    "flex items-center justify-between gap-1 svelte-1n72bbj",
    $page.url.pathname.startsWith("/yellowseat") ? "active" : ""
  ].join(" ").trim()}">Yellow Seat</a>

					<ul class="ml-6 mt-3 space-y-2"><li><a href="/yellowseat/menus" class="${[
    "block",
    $page.url.pathname === "/yellowseat/menus" ? "subactive" : ""
  ].join(" ").trim()}">— Catering Menus</a></li>
						<li><a href="/yellowseat/venues" class="${[
    "block",
    $page.url.pathname === "/yellowseat/venues" ? "subactive" : ""
  ].join(" ").trim()}">— Partner Venues</a></li></ul></li>
				<li class="${["svelte-1n72bbj", $page.url.pathname === "/orangeseat" ? "active" : ""].join(" ").trim()}"><a href="/orangeseat" class="block">Orange Seat</a></li>
				<li class="${["svelte-1n72bbj", $page.url.pathname === "/greenseat" ? "active" : ""].join(" ").trim()}"><a href="/greenseat" class="block">Green Seat</a></li>
				<li class="group relative"><span class="${[
    "flex cursor-default items-center justify-between gap-1 transition hover:text-blue-700 svelte-1n72bbj",
    $page.url.pathname === "/team" || $page.url.pathname === "/gallery" ? "active" : ""
  ].join(" ").trim()}">About</span>

					<ul class="ml-6 mt-3 space-y-2"><li${add_classes(($page.url.pathname === "/team" ? "subactive" : "").trim())}><a href="/team" class="block">— Our team</a></li>
						<li${add_classes(($page.url.pathname === "/gallery" ? "subactive" : "").trim())}><a href="/gallery" class="block">— Gallery</a></li></ul></li></ul>` : ``}</nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-woxznh a.svelte-woxznh{position:relative}footer.svelte-woxznh a.svelte-woxznh:before{content:'';position:absolute;width:0;bottom:-5px;left:0;height:2px;background-color:white;transition:all 0.15s ease-in-out}footer.svelte-woxznh a.svelte-woxznh:hover:before{width:100%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="mt-20 bg-[#183153] py-7 px-4 text-xl text-gray-200 svelte-woxznh"><div class="container mx-auto grid justify-center gap-10 text-center md:grid-cols-3"><div class="justify-self-center"><h3 class="mb-2 text-2xl font-semibold">Our services</h3>
			<ul class="space-y-2"><li><a href="/blueseat" class="svelte-woxznh">Blue Seat</a></li>
				<li><a href="/yellowseat" class="svelte-woxznh">Yellow Seat</a></li>
				<li><a href="/orangeseat" class="svelte-woxznh">Orange Seat</a></li>
				<li><a href="/greenseat" class="svelte-woxznh">Green Seat</a></li></ul></div>
		<div class="justify-self-center"><h3 class="mb-2 text-2xl font-semibold">About</h3>
			<ul class="space-y-2"><li><a href="/team" class="svelte-woxznh">Our team</a></li>
				<li><a href="/gallery" class="svelte-woxznh">Gallery</a></li></ul></div>
		<div class="justify-self-center"><h3 class="mb-2 text-2xl font-semibold">Contact us</h3>
			<ul><li>${validate_component(IconMessageCircle2Filled$1, "IconMessageCircle2Filled").$$render($$result, { class: "mr-2 mb-1 inline" }, {}, {})}<a href="/contact" class="svelte-woxznh">Get in touch</a></li></ul></div></div>

	<div class="mt-6 flex justify-center"><span>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} All rights reserved. </span></div>
</footer>`;
});
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex min-h-screen flex-col">${validate_component(Header, "Header").$$render($$result, { pathname: data.pathname }, {}, {})}

	<main class="container mx-auto flex max-w-6xl flex-1 flex-col px-5">${validate_component(PageTransition, "PageTransition").$$render($$result, { pathname: data.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
