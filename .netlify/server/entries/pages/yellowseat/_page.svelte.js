import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "classnames";
/* empty css                                                       */import { S as Seat, T as Tabs, a as TabItem } from "../../../chunks/seat.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = { name: "Yellow Seat", slug: "yellowseat" };
  return `${$$result.head += `<!-- HEAD_svelte-h5q2_START -->${$$result.title = `<title>Yellow Seat</title>`, ""}<meta name="${"description"}" content="${"Yellow Seat"}"><link rel="${"preload"}" as="${"image"}" href="${"/yellowseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"/yellowseat/banner.jpg"}"><!-- HEAD_svelte-h5q2_END -->`, ""}

${validate_component(Seat, "Seat").$$render($$result, { data }, {}, {
    default: () => {
      return `<div class="${"space"}"><p>At Yellow Seat we take the time to listen and guarantee that we are continuously providing
			consistent food services that suits your needs. We strive for honest relationships which is
			built on trust and integrity. Food and service is our passion.
		</p>

		<p>Though our business relationships we build long term partnerships with our clients and
			demonstrate our care and dedication though our social promises, pathways to progression for
			all employees, food safety, regular site visits, and quarterly performance reviews.
		</p>

		<p>Yellow Seat believes that each customer expects consistency in every aspect of their meal
			experience. We take care of all aspects of the service delivery, the right way, which means
			that you can focus on - running your business.
		</p>

		<h3 class="${"text-2xl font-bold mb-4"}">Great food and service brings people together.</h3>
		<p class="${"text-xl mb-4"}">It starts with locally sourced ingrediency combined with our passion of food which allows us
			to create food that is tasty, enjoyable, and nutritious.
		</p>
		<p class="${"text-xl mb-4"}">With Yellow Seats meals, you can tell the food was prepared with care and made specifically
			for your students. Yellow Seat will ensure everyone who eats their meal isn&#39;t just enjoying
			tasty food, but also getting vital nutrition at great value. Our team select local freshest
			ingredients to deliver dishes to delight, exactly how you want them. We understand our world
			is diverse and students often have different needs. We are sensitive to lifestyle, cultural
			and medical requirements and can offer delicious diary options.
		</p>
		<p class="${"text-xl mb-8"}">Contact us to discuss our pricing models.</p>
		<p><a href="${"/contact"}" class="${"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-xl px-8 py-3"}">Get in touch</a></p></div>

	<div class="${"seat-tabs"}">${validate_component(Tabs, "Tabs").$$render(
        $$result,
        {
          style: "full",
          defaultClass: "flex gap-5",
          contentClass: "p-4"
        },
        {},
        {
          default: () => {
            return `${validate_component(TabItem, "TabItem").$$render(
              $$result,
              {
                class: "w-full",
                activeClasses: "w-full p-3 bg-white rounded-md border border-b-4 border-black",
                inactiveClasses: "w-full p-3 bg-white border border-black border-b-4 rounded-md hover:border-b-4 hover:border-b-black transition",
                open: true
              },
              {},
              {
                title: () => {
                  return `<span slot="${"title"}" class="${"tab-title"}">Cafés</span>`;
                },
                default: () => {
                  return `<div class="${"tab-grid"}"><img src="${"./yellowseat/cafe1.jpg"}" alt="${"Yellow Seat gallery 1"}" loading="${"lazy"}">
					<div><img src="${"./yellowseat/cafe2.jpg"}" alt="${"Yellow Seat gallery 2"}" loading="${"lazy"}"></div>
					<img src="${"./yellowseat/residence1.jpg"}" alt="${"Yellow Seat gallery 3"}" loading="${"lazy"}">
					<img src="${"./yellowseat/residence2.jpg"}" alt="${"Yellow Seat gallery 4"}" loading="${"lazy"}"></div>`;
                }
              }
            )}
			${validate_component(TabItem, "TabItem").$$render(
              $$result,
              {
                class: "w-full",
                activeClasses: "w-full p-3 bg-white rounded-md border border-b-4 border-black",
                inactiveClasses: "w-full p-3 bg-white border border-black border-b-4  rounded-md hover:border-b-4 hover:border-b-black transition"
              },
              {},
              {
                title: () => {
                  return `<span slot="${"title"}" class="${"tab-title"}">Residence Halls &amp; Boarding Schools</span>`;
                },
                default: () => {
                  return `<div class="${"tab-grid"}"><img src="${"./yellowseat/cafe1.jpg"}" alt="${"Yellow Seat gallery 1"}" loading="${"lazy"}">
					<div><img src="${"./yellowseat/cafe2.jpg"}" alt="${"Yellow Seat gallery 2"}" loading="${"lazy"}"></div>
					<img src="${"./yellowseat/residence1.jpg"}" alt="${"Yellow Seat gallery 3"}" loading="${"lazy"}">
					<img src="${"./yellowseat/residence2.jpg"}" alt="${"Yellow Seat gallery 4"}" loading="${"lazy"}"></div>`;
                }
              }
            )}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
