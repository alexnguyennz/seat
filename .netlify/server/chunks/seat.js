import { c as create_ssr_component, f as add_attribute } from "./index.js";
const Seat_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1olruma{font-size:1.25rem;line-height:1.75rem}.seat-banner.svelte-1olruma{width:100%;border-radius:1.5rem;margin-bottom:2rem}",
  map: null
};
const Seat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-1olruma"><div class="content svelte-1olruma"><a${add_attribute("href", `/${data.slug}/`, 0)}><img${add_attribute("src", `${data.slug}.png`, 0)}${add_attribute("alt", `${data.name} logo`, 0)}></a>
		<img${add_attribute("src", `./${data.slug}/banner.jpg`, 0)} class="seat-banner svelte-1olruma"${add_attribute("alt", `${data.name} banner`, 0)}>

		${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Seat as S
};
