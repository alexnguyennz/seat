import { c as create_ssr_component } from "../../chunks/index.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1gi1s5n{text-align:center}p.svelte-1gi1s5n{font-size:1.25rem;line-height:1.75rem}a.svelte-1gi1s5n:hover{text-decoration:underline}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1hsosnv_START -->${$$result.title = `<title>404 - Page not found</title>`, ""}<meta name="${"description"}" content="${"404 - Page not found"}"><!-- HEAD_svelte-1hsosnv_END -->`, ""}

<div class="${"svelte-1gi1s5n"}"><h1 class="${"page-heading"}">404 - Page not found</h1>

	<p class="${"svelte-1gi1s5n"}">Sorry, we couldn&#39;t find that page. If you believe this is a mistake, please <a href="${"/contact"}" class="${"svelte-1gi1s5n"}">contact us</a>.
	</p>
</div>`;
});
export {
  Error as default
};
