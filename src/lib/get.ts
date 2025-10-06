import * as cheerio from "cheerio";
import got from "got";

export const get = async  (id: number | string) => {
  const url = `https://www.pinterest.com/pin/${id}`;

  const res = await got(url);
  const body = res.body;
  const $ = cheerio.load(body);

  const json = JSON.parse($('body').find('[data-relay-response=true]:eq(1)').text()); // find 2nd instance

  const v3PinQueryRes = json?.response?.data?.v3GetPinQuery?.data;
  const imageUrl = v3PinQueryRes?.imageSpec_orig?.url;
  const imageName = v3PinQueryRes?.title;
  const imageTitle = v3PinQueryRes?.unauthOnPageTitle;
  const uploaderUsername = v3PinQueryRes?.originPinner?.username;
  const uploaderName = v3PinQueryRes?.originPinner?.fullName;

  return {
    imageUrl,
    imageName,
    imageTitle,
    uploaderName,
    uploaderUsername
  };
}
