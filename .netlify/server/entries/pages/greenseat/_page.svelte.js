import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "classnames";
import { C as Carousel } from "../../../chunks/Carousel.js";
/* empty css                                                       */import { S as Seat, T as Tabs, a as TabItem } from "../../../chunks/seat.js";
import { g as greenseatPage } from "../../../chunks/_server.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = { name: "Green Seat", slug: "greenseat" };
  return `${$$result.head += `<!-- HEAD_svelte-tnbk78_START -->${$$result.title = `<title>Green Seat</title>`, ""}<meta name="${"description"}" content="${"Green Seat"}"><link rel="${"preload"}" as="${"image"}" href="${"/greenseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"/greenseat/banner.jpg"}"><!-- HEAD_svelte-tnbk78_END -->`, ""}

${validate_component(Seat, "Seat").$$render($$result, { data }, {}, {
    default: () => {
      return `<div class="${"space"}"><p>At Green Seat we take the time to listen and guarantee that we are continuously providing
			consistent cleaning services that suits your needs. We strive for honest relationships which
			is built on trust and integrity. Service is our passion as we strive for excellence.
		</p>

		<p>Though our business relationships we build long term partnerships with our clients, we view
			this as an important investment offering innovative cost-effective long-term solutions to add
			value and continually improve service delivery. We offer environmentally and social conscious
			products where appropriate, innovation, monthly cleaning audits, regular site visits, and
			quarterly performance reviews.
		</p>

		<p>Green Seat we understand the expectations around cleaning. We take care of all aspects of
			service delivery, the right way, which means that you can focus on - running your business.
		</p>

		<p>We are happy to work to an existing specification or provide a full cleaning programme to suit
			your company&#39;s needs.
		</p>

		<p>For a quality, reliable and affordable cleaning solution, contact a member of our team for a
			free no obligation quote.
		</p>

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
                inactiveClasses: "w-full p-3 bg-white rounded-md hover:border-b-4 hover:border-b-black transition",
                open: true
              },
              {},
              {
                title: () => {
                  return `<span slot="${"title"}" class="${"tab-title"}">Event and Catering Equipment</span>`;
                },
                default: () => {
                  return `<div class="${"tab-grid"}"><div class="${"space-y-10 "}">${validate_component(Carousel, "Carousel").$$render(
                    $$result,
                    {
                      images: greenseatPage,
                      showCaptions: false,
                      showThumbs: false,
                      loop: true,
                      duration: 3e3,
                      divClass: "overflow-hidden relative"
                    },
                    {},
                    {}
                  )}</div>
					<div><img src="${"./greenseat/3.jpg"}" alt="${"Green Seat gallery 1"}" loading="${"lazy"}"></div></div>`;
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
