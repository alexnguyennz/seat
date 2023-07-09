import { c as create_ssr_component, d as add_attribute, e as escape, n as null_to_empty, v as validate_component, f as each, o as compute_slots } from "./index2.js";
import { twMerge } from "tailwind-merge";
/* empty css                                         */const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { altTag = "" } = $$props;
  let { attr = "" } = $$props;
  let { slideClass = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.attr === void 0 && $$bindings.attr && attr !== void 0)
    $$bindings.attr(attr);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  return `<div${add_attribute("class", slideClass, 0)}><img${add_attribute("src", image, 0)}${add_attribute("alt", altTag, 0)}${add_attribute("title", attr, 0)}></div>

`;
});
const css$1 = {
  code: ".active.svelte-1o2b5yq{opacity:1}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumbImg = "" } = $$props;
  let { altTag = "" } = $$props;
  let { titleLink = "" } = $$props;
  let { id } = $$props;
  let { thumbWidth = 100 } = $$props;
  let { selected = false } = $$props;
  let { thumbClass = "" } = $$props;
  if ($$props.thumbImg === void 0 && $$bindings.thumbImg && thumbImg !== void 0)
    $$bindings.thumbImg(thumbImg);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.titleLink === void 0 && $$bindings.titleLink && titleLink !== void 0)
    $$bindings.titleLink(titleLink);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.thumbWidth === void 0 && $$bindings.thumbWidth && thumbWidth !== void 0)
    $$bindings.thumbWidth(thumbWidth);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  $$result.css.add(css$1);
  return `
<button aria-label="Click to view image"><img class="${[
    escape(null_to_empty(thumbClass), true) + " svelte-1o2b5yq",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("id", id.toString(), 0)}${add_attribute("src", thumbImg, 0)}${add_attribute("alt", altTag, 0)} title="${"Image from " + escape(titleLink, true)}" width="${escape(thumbWidth, true) + "%"}"></button>

`;
});
const Caption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caption = "" } = $$props;
  let { captionClass = "" } = $$props;
  let { pClass = "text-gray-900 dark:text-white" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.pClass === void 0 && $$bindings.pClass && pClass !== void 0)
    $$bindings.pClass(pClass);
  return `<div${add_attribute("class", captionClass, 0)}><p id="caption"${add_attribute("class", pClass, 0)}>${escape(caption)}</p></div>

`;
});
const css = {
  code: ".active.svelte-1o2b5yq{opacity:1}",
  map: null
};
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = false } = $$props;
  let { indicatorClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  $$result.css.add(css);
  return `<button type="button" class="${[
    escape(null_to_empty(indicatorClass), true) + " svelte-1o2b5yq",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-label", name, 0)}></button>

`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let $$slots = compute_slots(slots);
  let { id = "default-carousel" } = $$props;
  let { showIndicators = true } = $$props;
  let { showCaptions = true } = $$props;
  let { showThumbs = true } = $$props;
  let { images } = $$props;
  let { slideControls = true } = $$props;
  let { loop = false } = $$props;
  let { duration = 2e3 } = $$props;
  let { thumbClass = "opacity-40" } = $$props;
  let { divClass = "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" } = $$props;
  let divCls = twMerge(divClass, $$props.classDiv);
  let { indicatorDivClass = "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2" } = $$props;
  let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
  let { captionClass = "h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center" } = $$props;
  let captionCls = twMerge(captionClass, $$props.classCaption);
  let { indicatorClass = "w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" } = $$props;
  let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
  let { slideClass = "" } = $$props;
  let imageShowingIndex = 0;
  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      imageShowingIndex = 0;
    } else {
      imageShowingIndex += 1;
    }
  };
  if (loop) {
    setInterval(
      () => {
        nextSlide();
      },
      duration
    );
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.showIndicators === void 0 && $$bindings.showIndicators && showIndicators !== void 0)
    $$bindings.showIndicators(showIndicators);
  if ($$props.showCaptions === void 0 && $$bindings.showCaptions && showCaptions !== void 0)
    $$bindings.showCaptions(showCaptions);
  if ($$props.showThumbs === void 0 && $$bindings.showThumbs && showThumbs !== void 0)
    $$bindings.showThumbs(showThumbs);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.slideControls === void 0 && $$bindings.slideControls && slideControls !== void 0)
    $$bindings.slideControls(slideControls);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.indicatorDivClass === void 0 && $$bindings.indicatorDivClass && indicatorDivClass !== void 0)
    $$bindings.indicatorDivClass(indicatorDivClass);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  image = images[imageShowingIndex];
  return `<div${add_attribute("id", id, 0)} class="relative"><div${add_attribute("class", divCls, 0)}>${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: image.imgurl,
      altTag: image.name,
      attr: image.attribution,
      slideClass
    },
    {},
    {}
  )}</div>
  ${showIndicators ? `
    <div${add_attribute("class", indicatorDivCls, 0)}>${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        name,
        selected: imageShowingIndex === id2,
        indicatorClass: indicatorCls
      },
      {},
      {}
    )}`;
  })}</div>` : ``}
  ${slideControls ? `
    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${$$slots.previous ? `${slots.previous ? slots.previous({}) : ``}` : `<svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`}
        <span class="hidden">Previous</span></span></button>
    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${$$slots.next ? `${slots.next ? slots.next({}) : ``}` : `<svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`}
        <span class="hidden">Next</span></span></button>` : ``}</div>

${showCaptions ? `${validate_component(Caption, "Caption").$$render(
    $$result,
    {
      caption: images[imageShowingIndex].name,
      captionClass: captionCls
    },
    {},
    {}
  )}` : ``}

${showThumbs ? `<div class="flex flex-row justify-center bg-gray-100">${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        thumbClass,
        thumbImg: imgurl,
        altTag: name,
        titleLink: attribution,
        id: id2,
        selected: imageShowingIndex === id2
      },
      {},
      {}
    )}`;
  })}</div>` : ``}

`;
});
export {
  Carousel as C
};
