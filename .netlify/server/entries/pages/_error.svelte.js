import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1hsosnv_START -->${$$result.title = `<title>404 - Page not found</title>`, ""}<meta name="description" content="404 - Page not found"><!-- HEAD_svelte-1hsosnv_END -->`, ""}

<div><h1 class="page-heading">404 - Page not found</h1>

	<p class="text-center text-xl">Sorry, we couldn&#39;t find that page. If you believe this is a mistake, please <a href="/contact" class="animated-link">contact us</a>.
	</p></div>`;
});
export {
  Error as default
};
