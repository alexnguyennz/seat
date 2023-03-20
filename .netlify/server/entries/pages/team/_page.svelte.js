import { c as create_ssr_component, f as add_attribute, h as escape, v as validate_component } from "../../../chunks/index.js";
const teamMember_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-dojhlc.svelte-dojhlc{margin-left:auto;margin-right:auto;border-radius:1.5rem}h2.svelte-dojhlc.svelte-dojhlc{margin-top:1rem;text-align:center;font-weight:700;font-size:1.875rem;line-height:2.25rem}.linkedin.svelte-dojhlc.svelte-dojhlc{display:flex;justify-content:center;opacity:0.8;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.linkedin.svelte-dojhlc.svelte-dojhlc:hover{opacity:1}.linkedin.svelte-dojhlc svg.svelte-dojhlc{width:2rem;height:2rem}.hr.svelte-dojhlc.svelte-dojhlc{display:flex;flex-direction:row;align-items:center;margin-top:1rem;margin-bottom:1rem;height:1rem;white-space:nowrap}.hr.svelte-dojhlc.svelte-dojhlc:not(:empty){gap:1rem}.hr.svelte-dojhlc.svelte-dojhlc:before{background-color:rgb(197, 197, 197)}.hr.svelte-dojhlc.svelte-dojhlc:after{background-color:rgb(197, 197, 197)}.hr.svelte-dojhlc.svelte-dojhlc:before,.hr.svelte-dojhlc.svelte-dojhlc:after{content:'';flex-grow:1;height:0.125rem;width:100%}",
  map: null
};
const Team_member = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div>
	<img${add_attribute("src", `/team/${data.slug}.png`, 0)}${add_attribute("alt", `${data.name} profile`, 0)} class="${"svelte-dojhlc"}">

	
	<div><div>
			<h2 class="${"svelte-dojhlc"}">${escape(data.name)}</h2>

			
			<div class="${"linkedin svelte-dojhlc"}"><a${add_attribute("href", data.linkedin, 0)} target="${"_blank"}" rel="${"noopener noreferrer nofollow"}"${add_attribute("aria-label", `${data.name} LinkedIn page`, 0)}><svg fill="${"currentColor"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" class="${"svelte-dojhlc"}"><path d="${"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}"></path></svg></a></div></div>

		${slots.default ? slots.default({}) : ``}

		<div class="${"hr svelte-dojhlc"}"><button><i${add_attribute("id", `${data.slug}-arrow`, 0)} class="${"fa-solid fa-arrow-down"}"></i></button></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-gs9904.svelte-gs9904.svelte-gs9904{list-style-type:disc;margin-left:1.25rem}.space.svelte-gs9904>.svelte-gs9904:not([hidden])~.svelte-gs9904:not([hidden]){margin-top:calc(1rem * calc(1 - 0));margin-bottom:calc(1rem * 0)}.members.svelte-gs9904.svelte-gs9904.svelte-gs9904{display:grid;gap:2rem}.member.svelte-gs9904.svelte-gs9904.svelte-gs9904{margin-top:0.75rem;font-size:1.25rem;line-height:1.75rem}.award.svelte-gs9904.svelte-gs9904.svelte-gs9904{list-style-type:none;padding-top:10px;padding-bottom:10px}@media(min-width: 768px){.members.svelte-gs9904.svelte-gs9904.svelte-gs9904{grid-template-columns:repeat(3, minmax(0, 1fr))}}.toggle.svelte-gs9904.svelte-gs9904.svelte-gs9904{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [
    {
      name: "Clint Schoultz",
      slug: "clint-schoultz",
      linkedin: "https://www.linkedin.com/in/clint-schoultz-7833a337"
    },
    {
      name: "Bradley Alford",
      slug: "bradley-alford",
      linkedin: "https://www.linkedin.com/in/brad-a-577a0721"
    },
    {
      name: "Jessica Armstrong",
      slug: "jessica-armstrong",
      linkedin: "https://www.linkedin.com/in/jess-armstrong-0992b81b"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1yjw2ft_START -->${$$result.title = `<title>Our team</title>`, ""}<meta name="${"description"}" content="${"Our team"}"><link rel="${"preload"}" as="${"image"}" href="${"/team/clint-schoultz.png"}"><link rel="${"preload"}" as="${"image"}" href="${"/team/bradley-alford.png"}"><link rel="${"preload"}" as="${"image"}" href="${"/team/jessica-armstrong.png"}"><!-- HEAD_svelte-1yjw2ft_END -->`, ""}

<div><h1 class="${"page-heading"}">Our team</h1>

	<div class="${"members svelte-gs9904"}">${validate_component(Team_member, "TeamMember").$$render($$result, { data: data[0] }, {}, {
    default: () => {
      return `<div class="${"member svelte-gs9904"}"><ul class="${"award svelte-gs9904"}"><li><i class="${"fa-solid fa-award"}"></i>
						<span>Masters of Business Administration - Innovation and Leadership</span></li>
					<li><i class="${"fa-solid fa-award"}"></i>
						<span>Masters of Hotel Management</span></li></ul>

				<div class="${"space svelte-gs9904"}"><p class="${"svelte-gs9904"}">Clint has worked in hospitality for over 20 years across fine dining, cafes, public and
						private health care, large events, residence halls and many more.
					</p>

					<div id="${"clint-schoultz"}" class="${"toggle space svelte-gs9904"}"><p class="${"svelte-gs9904"}">He uses his years of influential leadership and industry knowledge, to support his
							team to achieve great customer outcomes. He has led the service delivery for high
							profile sites/customers, like, as Villa Maria, Vector Arena, FIFA, Wellington City
							Council and Westpac Stadium.
						</p>
						<p class="${"svelte-gs9904"}">His previous roles include:</p>
						<ul class="${"svelte-gs9904"}"><li>Catering Manager for Westpac Stadium</li>
							<li>National Catering Manager for FIFA U20 World Cup</li>
							<li>Operations Manager Food and Beverage for Vector Arena</li>
							<li>Regional Manager for Spotless</li></ul>

						<p class="${"svelte-gs9904"}">He uses the insights gained from managing the service delivery for these high profile
							clients/sites, to provide his teams with the right support, resources and training to
							deliver consistent quality services.
						</p></div></div></div>`;
    }
  })}

		${validate_component(Team_member, "TeamMember").$$render($$result, { data: data[1] }, {}, {
    default: () => {
      return `<div class="${"member space svelte-gs9904"}"><p class="${"svelte-gs9904"}">Brad has worked in the hospitality industry for 20+ years in various management roles.
				</p>

				<div id="${"bradley-alford"}" class="${"toggle space svelte-gs9904"}"><p class="${"svelte-gs9904"}">During his tenure he has managed numerous stadiums, including:</p>
					<ul class="${"svelte-gs9904"}"><li>Westpac Stadium</li>
						<li>Mt Smart Stadium</li>
						<li>Subiaco Oval</li>
						<li>NIB Stadium</li></ul>

					<p class="${"svelte-gs9904"}">His Major Event experience throughout Australasia and Europe is extensive. Managing
						major events including:
					</p>
					<ul class="${"svelte-gs9904"}"><li>V8 events</li>
						<li>Bathurst 1000</li>
						<li>Sydney 500</li>
						<li>Phillip Island</li>
						<li>Tasmania</li>
						<li>Spring Racing Carnival</li>
						<li>Australian Open Golf</li>
						<li>Sydney Myer Music Bowl</li>
						<li>Melbourne Grand Prix</li>
						<li>The President&#39;s Cup in South Korea</li>
						<li>4 months as a Plot Manager in the Olympic Village at the London 2012 Olympics</li></ul>

					<p class="${"svelte-gs9904"}">He has also worked in the Education Sector with his sites providing over 4000 meals per
						day to boarding and day students. Brad thrives on managing teams to bring a project
						together - each person contributing differently to achieve a positive outcome.
					</p>

					<p class="${"svelte-gs9904"}">Brad&#39;s passion is delivering for client and key stakeholders truly successful events.
					</p></div></div>`;
    }
  })}

		${validate_component(Team_member, "TeamMember").$$render($$result, { data: data[2] }, {}, {
    default: () => {
      return `<div class="${"member space svelte-gs9904"}"><p class="${"svelte-gs9904"}">With over 20 years of experience in the hospitality sector Jessica (Jess) brings a wealth
					of knowledge and a can do attitude to any event she works on. From small private
					functions, to arenas, stadiums and green sites Jess has seen it all.
				</p>

				<div id="${"jessica-armstrong"}" class="${"toggle space svelte-gs9904"}"><p class="${"svelte-gs9904"}">She has attended year 1 and 2 at the Venue Management School in Kingscliff Australia and
						is a long standing member of EVANZ.
					</p>
					<p class="${"svelte-gs9904"}">Through Jess&#39;s career she has worked with The Orange Group, Vector Arena, Liquid Events,
						Westpac Stadium, Reliance Risk and most recently as the Venues Operations Manager for
						Venues Wellington overlooking the event operations of:
					</p>
					<ul class="${"svelte-gs9904"}"><li>TSB Arena</li>
						<li>Michael Fowler Centre</li>
						<li>St James Theatre</li>
						<li>The Opera House</li>
						<li>Shed 6 Auditorium</li></ul>

					<p class="${"svelte-gs9904"}">Jess is passionate about building relationships with clients and co-workers,
						collaborating for the very best out come and chipping in anywhere she is needed.
					</p></div></div>`;
    }
  })}</div>
</div>`;
});
export {
  Page as default
};
