import { c as create_ssr_component, f as add_attribute, h as escape, l as each, v as validate_component } from "../../chunks/index.js";
const Seat_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"rounded-3xl overflow-hidden shadow-md border-gray-500 border-2 flex flex-col"}"><a${add_attribute("href", `/${data.slug}`, 0)}><img${add_attribute("src", `./${data.slug}-sm.png`, 0)}${add_attribute("alt", `${data.name} logo`, 0)} class="${"w-full"}"></a>
	<div class="${"px-6 py-4"}"><p class="${"text-gray-700"}">${escape(data.description)}</p></div>
	<div class="${"px-6 pt-4 pb-2 mt-auto"}"><span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-lg"}"><a${add_attribute("href", `/${data.slug}`, 0)} class="${"link link-hover"}">Learn More →</a></span></div></div>`;
});
const List_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li class="${"flex items-center space-x-3"}">
	<svg class="${"flex-shrink-0 w-10 h-10 text-green-500 dark:text-green-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg>
	<span>${slots.default ? slots.default({}) : ``}</span></li>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const seats = [
    {
      name: "Blue Seat",
      slug: "blueseat",
      description: "Event consulting, management, delivery, licensing, retail, corporate player, artist catering and large events"
    },
    {
      name: "Yellow Seat",
      slug: "yellowseat",
      description: "Cafes, boarding schools, residence halls, private hospitals, canteens, consulting, and any other catering requirements"
    },
    {
      name: "Orange Seat",
      slug: "orangeseat",
      description: "Catering and event equipment hire from tills, flooring to marquees and kitchen equipment"
    },
    {
      name: "Green Seat",
      slug: "greenseat",
      description: "Corporate cleaning, carpets, and upholstery"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1vuvgno_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Home - Seat"}"><link rel="${"preload"}" as="${"image"}" href="${"./blueseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"./yellowseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"./orangeseat.png"}"><link rel="${"preload"}" as="${"image"}" href="${"./greenseat.png"}"><!-- HEAD_svelte-1vuvgno_END -->`, ""}

<section class="${"space-y-10 text-xl"}"><div><h2 class="${"page-heading"}">Our services</h2></div>

	<div class="${"grid grid-cols-1 md:grid-cols-2 gap-8"}">${each(seats, (seat) => {
    return `${validate_component(Seat_card, "SeatCard").$$render($$result, { data: seat }, {}, {})}`;
  })}</div>

	<div><h2 class="${"page-heading"}">Our social promises</h2>

		<ul>${validate_component(List_item, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `Skills and a career path`;
    }
  })}
			${validate_component(List_item, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `We will support people with their workplace progression - regardless of when and where they
				start`;
    }
  })}
			${validate_component(List_item, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `We will establish clear pathways to progression for all employees, offer support and
				mentorship programmes`;
    }
  })}
			${validate_component(List_item, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `Helping the next generation`;
    }
  })}

			<li><ul class="${"ml-20 list-disc"}"><li>We support <a href="${"https://vsctrust.org.nz/dosomegood"}" target="${"_blank"}" class="${"link link-hover"}" rel="${"noreferrer"}">Do Some Good</a> who bridges the gap between businesses and low decile schools
					</li>
					<li>Kiwi kids living in hardship deserve more support, opportunities and experiences from
						the wider community
					</li>
					<li>With many businesses seeking to promote corporate social responsibility, we aim to
						direct their focus and their customised offer of support to kids that need it the most
					</li></ul></li></ul></div>

	<h2 class="${"page-heading"}">The story behind the name</h2>

	<div class="${"grid md:grid-cols-2 gap-10"}"><img src="${"./name.webp"}" alt="${"blue seats"}" width="${"320"}" height="${"207"}" class="${"w-full mx-auto rounded-lg"}">

		<div class="${"space"}"><p>As a Melbourne boy Australian Football League is in Brad&#39;s blood. From the day he was born,
				Brad has been a Carlton Football Club Member. His Grandfather and Mother were both lifetime
				members as well.
			</p>

			<p>For every game, Brad and his mother would go to Princes Park and sit in the same blue seats,
				Number 19 and Number 20. They sat in those seats for over 25 years. Brad&#39;s passion for
				sports and live events began in those seats and helped determined his lifelong career path
				in events.
			</p>

			<p>Blue Seat, Yellow Seat, Green Seat, and Orange Seat are a family run by event and management
				professionals passionate about people, food, hospitality, and creating truly memorable
				occasions.
			</p></div></div></section>`;
});
export {
  Page as default
};
