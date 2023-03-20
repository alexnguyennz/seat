import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "classnames";
import { C as Carousel } from "../../../chunks/Carousel.js";
/* empty css                                                       */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".carousel.svelte-18fs6cz{margin-top:2.5rem;margin-bottom:2.5rem;padding:1.25rem;background-color:rgb(254 243 199);border-radius:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1okgg9d_START -->${$$result.title = `<title>Gallery</title>`, ""}<meta name="${"description"}" content="${"Gallery"}"><!-- HEAD_svelte-1okgg9d_END -->`, ""}

<div><h1 class="${"page-heading"}">Gallery</h1>

	<div class="${"carousel svelte-18fs6cz"}">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images: data.images,
      showCaptions: false,
      showThumbs: false,
      showIndicators: false,
      divClass: "carousel"
    },
    {},
    {}
  )}</div>
</div>`;
});
export {
  Page as default
};
