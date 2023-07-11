import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button-container.svelte-1f8v2fn.svelte-1f8v2fn{text-align:center}form.svelte-1f8v2fn.svelte-1f8v2fn{display:flex;flex-direction:column;gap:1.25rem}.hidden-form.svelte-1f8v2fn.svelte-1f8v2fn{display:none}.inputs.svelte-1f8v2fn.svelte-1f8v2fn{display:grid;gap:1.25rem}input.svelte-1f8v2fn.svelte-1f8v2fn,select.svelte-1f8v2fn.svelte-1f8v2fn,textarea.svelte-1f8v2fn.svelte-1f8v2fn{width:100%;padding:0.75rem;border-width:0;border-bottom-width:2px;font-size:1.25rem;line-height:1.75rem}textarea.svelte-1f8v2fn.svelte-1f8v2fn{height:10rem}.inputs.svelte-1f8v2fn input.svelte-1f8v2fn:focus{border-color:#1c64f2}select.svelte-1f8v2fn option.svelte-1f8v2fn{font-family:Tahoma, system-ui, sans-serif}@media(min-width: 768px){.inputs.svelte-1f8v2fn.svelte-1f8v2fn{grid-template-columns:repeat(2, minmax(0, 1fr))}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = "blue-seat" } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-y9g33t_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="description" content="Contact"><!-- HEAD_svelte-y9g33t_END -->`, ""}

<section class="space-y-5"><h1 class="page-heading">Get in touch</h1>

	<div><form${add_attribute("name", form, 0)} method="POST" data-netlify="true" class="svelte-1f8v2fn"><input type="hidden" name="form-name"${add_attribute("value", form, 0)} class="svelte-1f8v2fn">

			<div class="inputs svelte-1f8v2fn"><input type="text" name="name" placeholder="Your name" required class="svelte-1f8v2fn">
				<input type="email" name="email" placeholder="Your email" required class="svelte-1f8v2fn">
				<input type="url" name="website" placeholder="Your website" class="svelte-1f8v2fn">
				<input type="text" name="phone-number" placeholder="Your phone number" class="svelte-1f8v2fn"></div>

			<div><select name="service" id="service" required class="svelte-1f8v2fn"><option disabled selected value="" class="svelte-1f8v2fn">Type of service</option><option value="Yellow Seat" class="svelte-1f8v2fn">Yellow Seat</option><option value="Blue Seat" class="svelte-1f8v2fn">Blue Seat</option><option value="Orange Seat" class="svelte-1f8v2fn">Orange Seat</option><option value="Green Seat" class="svelte-1f8v2fn">Green Seat</option></select></div>

			<div><textarea name="message" placeholder="Your message" required class="svelte-1f8v2fn"></textarea></div>

			<div class="button-container svelte-1f8v2fn"><button type="submit" class="rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-3 text-xl font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">Send message</button></div></form>

		
		<form name="yellow-orange-green-seat" method="POST" data-netlify="true" class="hidden-form svelte-1f8v2fn"><input type="hidden" name="form-name" value="yellow-orange-green-seat" class="svelte-1f8v2fn">

			<div><input type="text" name="name" required class="svelte-1f8v2fn">
				<input type="email" name="email" required class="svelte-1f8v2fn">
				<input type="url" name="website" class="svelte-1f8v2fn">
				<input type="text" name="phone-number" class="svelte-1f8v2fn"></div>

			<div><select name="service" required class="svelte-1f8v2fn"><option disabled selected value="" class="svelte-1f8v2fn">Type of Service</option><option value="yellowseat" class="svelte-1f8v2fn">Yellow Seat</option><option value="blueseat" class="svelte-1f8v2fn">Blue Seat</option><option value="orangeseat" class="svelte-1f8v2fn">Orange Seat</option><option value="greenseat" class="svelte-1f8v2fn">Green Seat</option></select></div>

			<div><textarea name="message" required class="svelte-1f8v2fn"></textarea></div>

			<div><button type="submit">Send message</button></div></form></div>
</section>`;
});
export {
  Page as default
};
