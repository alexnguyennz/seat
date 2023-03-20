import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
import "classnames";
/* empty css                                                       */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button-container.svelte-9wykru.svelte-9wykru{text-align:center}form.svelte-9wykru.svelte-9wykru{display:flex;flex-direction:column;gap:1.25rem}.hidden-form.svelte-9wykru.svelte-9wykru{display:none}.inputs.svelte-9wykru.svelte-9wykru{display:grid;gap:1.25rem}input.svelte-9wykru.svelte-9wykru,select.svelte-9wykru.svelte-9wykru,textarea.svelte-9wykru.svelte-9wykru{width:100%;padding:0.75rem;border-width:0;border-bottom-width:2px;font-size:1.25rem;line-height:1.75rem}textarea.svelte-9wykru.svelte-9wykru{height:10rem}.inputs.svelte-9wykru input.svelte-9wykru:focus{border-color:#1c64f2}select.svelte-9wykru option.svelte-9wykru{font-family:Tahoma}@media(min-width: 768px){.inputs.svelte-9wykru.svelte-9wykru{grid-template-columns:repeat(2, minmax(0, 1fr))}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form;
  $$result.css.add(css);
  form = "blue-seat";
  return `${$$result.head += `<!-- HEAD_svelte-y9g33t_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="${"description"}" content="${"Contact"}"><!-- HEAD_svelte-y9g33t_END -->`, ""}

<div><h1 class="${"page-heading"}">Get in touch</h1>

	<div><form${add_attribute("name", form, 0)} method="${"POST"}" data-netlify="${"true"}" class="${"svelte-9wykru"}"><input type="${"hidden"}" name="${"form-name"}"${add_attribute("value", form, 0)} class="${"svelte-9wykru"}">

			<div class="${"inputs svelte-9wykru"}"><input type="${"text"}" name="${"name"}" placeholder="${"Your name"}" required class="${"svelte-9wykru"}">
				<input type="${"email"}" name="${"email"}" placeholder="${"Your email"}" required class="${"svelte-9wykru"}">
				<input type="${"url"}" name="${"website"}" placeholder="${"Your website"}" class="${"svelte-9wykru"}">
				<input type="${"text"}" name="${"phone-number"}" placeholder="${"Your phone number"}" class="${"svelte-9wykru"}"></div>

			<div><select name="${"service"}" id="${"service"}" required class="${"svelte-9wykru"}"><option disabled selected value="${""}" class="${"svelte-9wykru"}">Type of service</option><option value="${"Yellow Seat"}" class="${"svelte-9wykru"}">Yellow Seat</option><option value="${"Blue Seat"}" class="${"svelte-9wykru"}">Blue Seat</option><option value="${"Orange Seat"}" class="${"svelte-9wykru"}">Orange Seat</option><option value="${"Green Seat"}" class="${"svelte-9wykru"}">Green Seat</option></select></div>

			<div><textarea name="${"message"}" placeholder="${"Your message"}" required class="${"svelte-9wykru"}"></textarea></div>

			<div class="${"button-container svelte-9wykru"}"><button type="${"submit"}" class="${"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-xl px-8 py-3"}">Send message</button></div></form>

		
		<form name="${"yellow-orange-green-seat"}" method="${"POST"}" data-netlify="${"true"}" class="${"hidden-form svelte-9wykru"}"><input type="${"hidden"}" name="${"form-name"}" value="${"yellow-orange-green-seat"}" class="${"svelte-9wykru"}">

			<div><input type="${"text"}" name="${"name"}" required class="${"svelte-9wykru"}">
				<input type="${"email"}" name="${"email"}" required class="${"svelte-9wykru"}">
				<input type="${"url"}" name="${"website"}" class="${"svelte-9wykru"}">
				<input type="${"text"}" name="${"phone-number"}" class="${"svelte-9wykru"}"></div>

			<div><select name="${"service"}" id="${"service"}" required class="${"svelte-9wykru"}"><option disabled selected value="${""}" class="${"svelte-9wykru"}">Type of Service</option><option value="${"yellowseat"}" class="${"svelte-9wykru"}">Yellow Seat</option><option value="${"blueseat"}" class="${"svelte-9wykru"}">Blue Seat</option><option value="${"orangeseat"}" class="${"svelte-9wykru"}">Orange Seat</option><option value="${"greenseat"}" class="${"svelte-9wykru"}">Green Seat</option></select></div>

			<div><textarea name="${"message"}" required class="${"svelte-9wykru"}"></textarea></div>

			<div><button type="${"submit"}">Send message</button></div></form></div>
</div>`;
});
export {
  Page as default
};
