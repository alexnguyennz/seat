import { c as create_ssr_component, f as add_attribute, h as each } from "../../../chunks/index.js";
import "atropos";
/* empty css                           */import { register } from "swiper/element/bundle";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".atropos.svelte-e94m23{opacity:0;animation:svelte-e94m23-show 0.5s 1s forwards}@keyframes svelte-e94m23-show{0%{opacity:0}100%{opacity:1}}.carousel.svelte-e94m23{margin-top:2.5rem;margin-bottom:2.5rem;padding:1.25rem;background-color:rgb(254 243 199);border-radius:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  register();
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1okgg9d_START -->${$$result.title = `<title>Gallery</title>`, ""}<meta name="description" content="Gallery"><!-- HEAD_svelte-1okgg9d_END -->`, ""}

<section class="space-y-5"><h1 class="page-heading">Gallery</h1>

	<div class="atropos svelte-e94m23"><div class="atropos-scale"><div class="atropos-rotate"><div class="atropos-inner"><div class="carousel svelte-e94m23"><swiper-container navigation="true" loop="true"${add_attribute("slides-per-view", 1, 0)}>${each(data.images, (image) => {
    return `<swiper-slide lazy="true"><img${add_attribute("src", image.imgurl, 0)}${add_attribute("alt", image.name, 0)} loading="lazy" class="h-96 w-full object-contain"></swiper-slide>`;
  })}</swiper-container></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};
