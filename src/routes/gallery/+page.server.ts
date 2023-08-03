import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '$env/static/private';

import { v2 as cloudinary } from 'cloudinary';
import { images } from '../../lib/gallery/+server.js';

import type { PageServerLoad } from './$types';

cloudinary.config({
	cloud_name: 'seat',
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET
});

export const load: PageServerLoad = async () => {
	try {
		const data = await cloudinary.search
			.expression('folder:/*')
			.sort_by('public_id', 'desc')
			.max_results(100)
			.execute();

		if (data.resources.length > 0) {
			// map into correct format for carousel
			const imageList = data.resources.map((image: any, idx: string) => {
				return {
					id: idx,
					name: image.filename,
					imgurl: image.url
				};
			});

			return { images: imageList };
		} else {
			return { images }; // return local images as backup if folder is empty
		}
	} catch {
		return { images }; // return local images as backup if there is an API failure
	}
};

export const prerender = false;
