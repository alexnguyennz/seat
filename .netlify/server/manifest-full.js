export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blueseat/1.jpg","blueseat/2.jpg","blueseat/3.jpg","blueseat/4.jpg","blueseat/backup/1.jpg","blueseat/backup/2.jpg","blueseat/backup/3.jpg","blueseat/backup/4.jpg","blueseat/backup/banner - Copy (2).jpg","blueseat/backup/banner - Copy.jpg","blueseat/backup/banner.jpg","blueseat/backup/bannerold.jpg","blueseat/banner.jpg","blueseat-sm.png","blueseat.png","BrandLogos/blueseat.png","BrandLogos/BlueSeatLogoJPG.jpg","BrandLogos/BlueSeatLogoPNG.png","BrandLogos/greenseat.png","BrandLogos/GreenSeatLogoJPG.jpg","BrandLogos/GreenSeatLogoPNG.png","BrandLogos/orangeseat.png","BrandLogos/OrangeSeatLogoJPG.jpg","BrandLogos/OrangeSeatLogoPNG.png","BrandLogos/SeatBrandLogos.ai","BrandLogos/SeatLogo.jpg","BrandLogos/yellowseat.png","BrandLogos/YellowSeatLogoJPG.jpg","BrandLogos/YellowSeatLogoPNG.png","favicon.png","fonts/LeagueSpartan.woff2","gallery/blueseat/10.jpg","gallery/blueseat/11.jpg","gallery/blueseat/12.jpg","gallery/blueseat/13.jpg","gallery/blueseat/14.jpg","gallery/blueseat/15.jpg","gallery/blueseat/16.jpg","gallery/blueseat/17.jpg","gallery/blueseat/18.jpg","gallery/blueseat/19.jpg","gallery/blueseat/20.jpg","gallery/blueseat/21.jpg","gallery/blueseat/22.jpg","gallery/blueseat/23.jpg","gallery/blueseat/24.jpg","gallery/blueseat/25.jpg","gallery/blueseat/26.jpg","gallery/blueseat/27.jpg","gallery/blueseat/28.jpg","gallery/blueseat/29.jpg","gallery/blueseat/30.jpg","gallery/blueseat/31.jpg","gallery/blueseat/32.jpg","gallery/blueseat/33.jpg","gallery/blueseat/34.jpg","gallery/blueseat/35.jpg","gallery/blueseat/36.jpg","gallery/blueseat/37.jpg","gallery/blueseat/38.jpg","gallery/blueseat/39.jpg","gallery/blueseat/40.jpg","gallery/blueseat/41.jpg","gallery/blueseat/7.jpg","gallery/blueseat/8.jpg","gallery/blueseat/9.jpg","gallery/yellowseat/1.jpg","gallery/yellowseat/2.jpg","gallery/yellowseat/3.jpg","gallery/yellowseat/4.jpg","gallery/yellowseat/5.jpg","gallery/yellowseat/6.jpg","greenseat/1.jpg","greenseat/2.jpg","greenseat/3.jpg","greenseat/backup/1.jpg","greenseat/backup/2.jpg","greenseat/backup/3.jpg","greenseat/backup/banner - Copy.jpg","greenseat/backup/banner.jpg","greenseat/banner.jpg","greenseat-sm.png","greenseat.png","logo/blueseat.png","logo/greenseat.png","logo/logo.png","logo/orangeseat.png","logo/yellowseat.png","name.webp","orangeseat/1.jpg","orangeseat/2.jpg","orangeseat/backup/1.jpg","orangeseat/backup/2.jpg","orangeseat/backup/backup.jpg","orangeseat/backup/banner - Copy.jpg","orangeseat/backup/banner-old.jpg","orangeseat/backup/banner.jpg","orangeseat/backup/banneroriginal.jpg","orangeseat/backup/old/1 - Copy.jpg","orangeseat/backup/old/banner - Copy.jpg","orangeseat/backup/old/test.jpg","orangeseat/banner.jpg","orangeseat/old/1 - Copy.jpg","orangeseat/old/banner - Copy.jpg","orangeseat/old/test.jpg","orangeseat-sm.png","orangeseat.png","robots.txt","team/backup/bradley-alford.png","team/backup/clint-schoultz.png","team/backup/jessica-hulseman.jpg","team/bradley-alford.png","team/clint-schoultz.png","team/jessica-armstrong.png","yellowseat/backup/banner - Copy.jpg","yellowseat/backup/banner.jpg","yellowseat/backup/cafe1.jpg","yellowseat/backup/cafe2.jpg","yellowseat/backup/food - Copy.jpg","yellowseat/backup/food.jpg","yellowseat/backup/residence.jpg","yellowseat/backup/residence1.jpg","yellowseat/backup/residence2.jpg","yellowseat/banner.jpg","yellowseat/cafe1.jpg","yellowseat/cafe2.jpg","yellowseat/residence1.jpg","yellowseat/residence2.jpg","yellowseat/venues/erskine-chapel.jpg","yellowseat/venues/te-rauparaha-arena.jpg","yellowseat-sm.png","yellowseat.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ai":"application/postscript",".woff2":"font/woff2",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.05f6da0e.js","app":"_app/immutable/entry/app.d3e10218.js","imports":["_app/immutable/entry/start.05f6da0e.js","_app/immutable/chunks/index.4192cf56.js","_app/immutable/chunks/singletons.d6b36745.js","_app/immutable/entry/app.d3e10218.js","_app/immutable/chunks/index.4192cf56.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blueseat",
				pattern: /^\/blueseat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/greenseat",
				pattern: /^\/greenseat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/orangeseat",
				pattern: /^\/orangeseat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/team",
				pattern: /^\/team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/yellowseat",
				pattern: /^\/yellowseat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/yellowseat/menus",
				pattern: /^\/yellowseat\/menus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/yellowseat/venues",
				pattern: /^\/yellowseat\/venues\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
