import { v2 } from "cloudinary";
import { i as images } from "../../../chunks/_server.js";
const CLOUDINARY_API_KEY = "498986659595345";
const CLOUDINARY_API_SECRET = "5U8yjGU1ucwyGPPrLuk961NhAlU";
const prerender = false;
v2.config({
  cloud_name: "seat",
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});
const load = async () => {
  try {
    const data = await v2.search.expression("folder:/*").sort_by("public_id", "desc").max_results(100).execute();
    if (data.resources.length > 0) {
      const imageList = data.resources.map((image, idx) => {
        return {
          id: idx,
          name: image.filename,
          imgurl: image.url
        };
      });
      return { images: imageList };
    } else {
      return { images };
    }
  } catch {
    return { images };
  }
};
export {
  load,
  prerender
};
