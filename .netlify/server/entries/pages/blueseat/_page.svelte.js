import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "classnames";
/* empty css                                                       */import { S as Seat, T as Tabs, a as TabItem } from "../../../chunks/seat.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = { name: "Blue Seat", slug: "blueseat" };
  return `${$$result.head += `<!-- HEAD_svelte-1926hca_START -->${$$result.title = `<title>Blue Seat</title>`, ""}<meta name="${"description"}" content="${"Blue Seat"}"><link rel="${"preload"}" as="${"image"}" href="${"/blueseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"/blueseat/banner.jpg"}"><!-- HEAD_svelte-1926hca_END -->`, ""}

${validate_component(Seat, "Seat").$$render($$result, { data }, {}, {
    default: () => {
      return `<div class="${"space"}"><p>Blue Seat is passionate about running safe and successful events. We believe that food, safety
			and hospitality are key to the customer experience and draw on over 40 years of event
			experience to be able to deliver event management, consultation or operational advice. We
			thrive on building open and honest relationships, continual learning and transparency.
		</p>

		<p>Through our business relationships we are able to build long term partnerships with clients,
			venues suppliers and staff. And can offer an end to end event management service or consulting
			on any project. We specialise in corporate and retail catering for events, alcohol management,
			liquor licensing, health and safety and event plans. In addition we are able to advise and
			negotiate on food and beverage contracts, tenders, sponsorships deals, boarding school
			requirements and so much more!
		</p>

		<p>Through our social promises we are dedicated to developing future career paths for all of our
			staff, food safety, the safe service of alcohol and boots on the ground support.
		</p>

		<p>Our clients, patrons, contacts, suppliers and staff are the beating heart of Blue Seat and we
			take care to deliver excellent events and advice to each and every stakeholder.
		</p>

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
                return `<span slot="${"title"}" class="${"tab-title"}">Event Management</span>`;
              },
              default: () => {
                return `<div class="${"tab-grid"}"><img src="${"./blueseat/1.jpg"}" alt="${"Blue Seat gallery 1"}" loading="${"lazy"}">
					<div><img src="${"./blueseat/2.jpg"}" alt="${"Blue Seat gallery 2"}" loading="${"lazy"}"></div>
					<img src="${"./blueseat/3.jpg"}" alt="${"Blue Seat gallery 3"}" loading="${"lazy"}">
					<img src="${"./blueseat/4.jpg"}" alt="${"Blue Seat gallery 4"}" loading="${"lazy"}"></div>`;
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
