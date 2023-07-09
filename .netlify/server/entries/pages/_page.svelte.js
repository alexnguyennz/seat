import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
const IconArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M5 12l14 0" }],
    ["path", { "d": "M13 18l6 -6" }],
    ["path", { "d": "M13 6l6 6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconArrowRight$1 = IconArrowRight;
const IconCircleCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
      }
    ],
    ["path", { "d": "M9 12l2 2l4 -4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconCircleCheck$1 = IconCircleCheck;
const SeatCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col overflow-hidden rounded-3xl border-2 border-gray-500 shadow-md"><a${add_attribute("href", `/${data.slug}`, 0)}><img${add_attribute("src", `./${data.slug}-sm.png`, 0)}${add_attribute("alt", `${data.name} logo`, 0)} class="w-full"></a>
	<div class="px-6 py-4"><p class="text-center">${escape(data.description)}</p></div>
	<div class="mx-auto mt-auto px-6 pt-4 pb-2"><a${add_attribute("href", `/${data.slug}`, 0)} class="mb-2 flex items-start gap-2 rounded-full bg-gray-600 px-4 pt-2 pb-1 text-lg font-semibold text-gray-100 transition hover:bg-gray-700">Learn More ${validate_component(IconArrowRight$1, "IconArrowRight").$$render($$result, {}, {}, {})}</a></div></div>`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li class="flex items-center gap-3">${validate_component(IconCircleCheck$1, "IconCircleCheck").$$render(
    $$result,
    {
      class: "h-10 w-10 flex-none rounded-full text-white",
      fill: "#22c55e"
    },
    {},
    {}
  )}${slots.default ? slots.default({}) : ``}</li>`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1vuvgno_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Home - Seat"><link rel="preload" as="image" href="./blueseat.png"><link rel="preload" as="image" href="./yellowseat.png"><link rel="preload" as="image" href="./orangeseat.png"><link rel="preload" as="image" href="./greenseat.png"><!-- HEAD_svelte-1vuvgno_END -->`, ""}

<section class="text-xl"><div class="mb-16"><h2 class="page-heading mb-4">Our services</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">${each(seats, (seat) => {
    return `${validate_component(SeatCard, "SeatCard").$$render($$result, { data: seat }, {}, {})}`;
  })}</div></div>

	<div class="mb-16"><h2 class="page-heading mb-4">Our social promises</h2>

		<ul>${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `Skills and a career path`;
    }
  })}
			${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `We will support people with their workplace progression - regardless of when and where they
				start`;
    }
  })}
			${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `We will establish clear pathways to progression for all employees, offer support and
				mentorship programmes`;
    }
  })}
			${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
    default: () => {
      return `Helping the next generation`;
    }
  })}

			<li><ul class="ml-20 list-disc space-y-2"><li>We support <a href="https://vsctrust.org.nz/dosomegood" target="_blank" class="animated-link" rel="noreferrer">Do Some Good</a> who bridges the gap between businesses and low decile schools
					</li>
					<li>Kiwi kids living in hardship deserve more support, opportunities and experiences from
						the wider community
					</li>
					<li>With many businesses seeking to promote corporate social responsibility, we aim to
						direct their focus and their customised offer of support to kids that need it the most
					</li></ul></li></ul></div>

	<div><h2 class="page-heading mb-4">The story behind the name</h2>

		<div class="grid gap-10 md:grid-cols-2"><img src="./name.webp" alt="blue seats" width="320" height="207" class="mx-auto w-full rounded-lg">

			<div class="space"><p>As a Melbourne boy, Australian Football League is in Brad&#39;s blood. From the day he was
					born, Brad has been a Carlton Football Club Member. His Grandfather and Mother were both
					lifetime members as well.
				</p>

				<p>For every game, Brad and his mother would go to Princes Park and sit in the same blue
					seats, Number 19 and Number 20. They sat in those seats for over 25 years. Brad&#39;s passion
					for sports and live events began in those seats and helped determined his lifelong career
					path in events.
				</p>

				<p>Blue Seat, Yellow Seat, Green Seat, and Orange Seat are a family run by event and
					management professionals passionate about people, food, hospitality, and creating truly
					memorable occasions.
				</p></div></div></div></section>`;
});
export {
  Page as default
};
