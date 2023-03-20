import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "classnames";
/* empty css                                                       */import { S as Seat, T as Tabs, a as TabItem } from "../../../chunks/seat.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = { name: "Orange Seat", slug: "orangeseat" };
  return `${$$result.head += `<!-- HEAD_svelte-t5a22e_START -->${$$result.title = `<title>Orange Seat</title>`, ""}<meta name="${"description"}" content="${"Orange Seat"}"><link rel="${"preload"}" as="${"image"}" href="${"/orangeseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"/orangeseat/banner.jpg"}"><!-- HEAD_svelte-t5a22e_END -->`, ""}

${validate_component(Seat, "Seat").$$render($$result, { data }, {}, {
    default: () => {
      return `<div class="${"space"}"><p>As Event and Catering specialists we offer and extensive range of hire equipment. We don&#39;t
			only supply the nice bits that guests will see and use - our product range extends to cash
			registers, flooring, marquees, catering equipment and the kitchen, from freezers to ovens, so
			we have your entire event covered.
		</p>

		<p>We have a proactive and flexible approach to every job. We can help with every last detail,
			from initial planning to delivery and collection.
		</p>

		<p>Contact us to discuss your next event.</p>

		<p><a href="${"/contact"}" class="${"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-xl px-8 py-3"}">Get in touch</a></p></div>

	<div class="${"seat-tabs"}">${validate_component(Tabs, "Tabs").$$render($$result, { style: "full", contentClass: "p-4" }, {}, {
        default: () => {
          return `${validate_component(TabItem, "TabItem").$$render(
            $$result,
            {
              class: "w-full",
              activeClasses: "w-full p-3 bg-white rounded-md border border-b-4 border-black",
              inactiveClasses: "w-full p-3 bg-white rounded-md hover:border-b-4 hover:border-b-black transition",
              open: true
            },
            {},
            {
              title: () => {
                return `<span slot="${"title"}" class="${"tab-title"}">Event and Catering Equipment</span>`;
              },
              default: () => {
                return `<div class="${"tab-grid"}"><img src="${"./orangeseat/1.jpg"}" alt="${"Orange Seat gallery 1"}" loading="${"lazy"}">
					<div><img src="${"./orangeseat/2.jpg"}" alt="${"Orange Seat gallery 2"}" loading="${"lazy"}"></div></div>`;
              }
            }
          )}`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
