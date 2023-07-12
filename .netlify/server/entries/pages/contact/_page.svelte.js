import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.button-container.svelte-14ccn75.svelte-14ccn75{text-align:center}form.svelte-14ccn75.svelte-14ccn75{display:flex;flex-direction:column;gap:1.25rem}.hidden-form.svelte-14ccn75.svelte-14ccn75{display:none}.inputs.svelte-14ccn75.svelte-14ccn75{display:grid;gap:1.25rem}input.svelte-14ccn75.svelte-14ccn75,select.svelte-14ccn75.svelte-14ccn75,textarea.svelte-14ccn75.svelte-14ccn75{width:100%;padding:0.75rem;border-color:#6b7280;border-width:0;border-bottom-width:2px;font-size:1.25rem;line-height:1.75rem}textarea.svelte-14ccn75.svelte-14ccn75{height:10rem}.inputs.svelte-14ccn75 input.svelte-14ccn75:focus-visible,select.svelte-14ccn75.svelte-14ccn75:focus-visible,textarea.svelte-14ccn75.svelte-14ccn75:focus-visible{border-bottom:2px solid #1c64f2;outline:1px solid #1c64f2}select.svelte-14ccn75.svelte-14ccn75{appearance:none}select.svelte-14ccn75.svelte-14ccn75:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right 0.75rem center;background-repeat:no-repeat;background-size:0.75em 0.75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}select.svelte-14ccn75 option.svelte-14ccn75{font-family:Tahoma, system-ui, sans-serif}@media(min-width: 768px){.inputs.svelte-14ccn75.svelte-14ccn75{grid-template-columns:repeat(2, minmax(0, 1fr))}}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = "blue-seat" } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-y9g33t_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="description" content="Contact"><!-- HEAD_svelte-y9g33t_END -->`, ""}

<section class="space-y-5"><h1 class="page-heading">Get in touch</h1>

	<div><form${add_attribute("name", form, 0)} method="POST" data-netlify="true" class="svelte-14ccn75"><input type="hidden" name="form-name"${add_attribute("value", form, 0)} class="svelte-14ccn75">

			<div class="inputs svelte-14ccn75"><input type="text" name="name" placeholder="Your name" required class="svelte-14ccn75">
				<input type="email" name="email" placeholder="Your email" required class="svelte-14ccn75">
				<input type="url" name="website" placeholder="Your website" class="svelte-14ccn75">
				<input type="text" name="phone-number" placeholder="Your phone number" class="svelte-14ccn75"></div>

			<div><select name="service" id="service" required class="svelte-14ccn75"><option disabled selected value="" class="svelte-14ccn75">Type of service</option><option value="Yellow Seat" class="svelte-14ccn75">Yellow Seat</option><option value="Blue Seat" class="svelte-14ccn75">Blue Seat</option><option value="Orange Seat" class="svelte-14ccn75">Orange Seat</option><option value="Green Seat" class="svelte-14ccn75">Green Seat</option></select></div>

			<div><textarea name="message" placeholder="Your message" required class="svelte-14ccn75"></textarea></div>

			<div class="button-container svelte-14ccn75"><button type="submit" class="rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-3 text-xl font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">Send message</button></div></form>

		
		<form name="yellow-orange-green-seat" method="POST" data-netlify="true" class="hidden-form svelte-14ccn75"><input type="hidden" name="form-name" value="yellow-orange-green-seat" class="svelte-14ccn75">

			<div><input type="text" name="name" required class="svelte-14ccn75">
				<input type="email" name="email" required class="svelte-14ccn75">
				<input type="url" name="website" class="svelte-14ccn75">
				<input type="text" name="phone-number" class="svelte-14ccn75"></div>

			<div><select name="service" required class="svelte-14ccn75"><option disabled selected value="" class="svelte-14ccn75">Type of Service</option><option value="yellowseat" class="svelte-14ccn75">Yellow Seat</option><option value="blueseat" class="svelte-14ccn75">Blue Seat</option><option value="orangeseat" class="svelte-14ccn75">Orange Seat</option><option value="greenseat" class="svelte-14ccn75">Green Seat</option></select></div>

			<div><textarea name="message" required class="svelte-14ccn75"></textarea></div>

			<div><button type="submit">Send message</button></div></form></div>
</section>`;
});
export {
  Page as default
};
