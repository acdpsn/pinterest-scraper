import * as cheerio from "cheerio";
import got from "got";

export type Info = {
  imageUrl: string;
  imageName: string;
  imageTitle: string;
  description: string;
  uploaderName: string;
  uploaderUsername: string;
}

/**
 * get info from a pinterest post
 * @param url post url or id
 * @returns post name, description, direct image url, etc.
 */
export const get = async  (url: string) => {
  const re = new RegExp(/(https?:\/\/)?.*\.?pinterest\.com\/pin\/.+/, 'i');
  const pinUrl = re.test(url) ? url : `https://www.pinterest.com/pin/${url}`;

  const res = await got(pinUrl);
  const body = res.body;
  const $ = cheerio.load(body);

  const json = JSON.parse($('body').find('[data-relay-response=true]:eq(1)').text()); // find 2nd instance
  const v3PinQueryRes = json?.response?.data?.v3GetPinQuery?.data;
  const imageUrl = v3PinQueryRes?.imageSpec_orig?.url;
  const imageName = v3PinQueryRes?.title;
  const imageTitle = v3PinQueryRes?.unauthOnPageTitle;
  const description = v3PinQueryRes?.description;
  const uploaderUsername = v3PinQueryRes?.originPinner?.username;
  const uploaderName = v3PinQueryRes?.originPinner?.fullName;

  const postInfo: Info = {
    imageUrl,
    imageName,
    imageTitle,
    description,
    uploaderName,
    uploaderUsername
  };

  return postInfo;
};
