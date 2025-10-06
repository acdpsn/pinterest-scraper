# pinterest-scraper

Fetch information about an image from pinterest

## Installation

```sh
npm i @acdpsn/pinterest-scraper
```

### Import

```ts
import * as Pinterest from "@acdpsn/pinterest-scraper";
```

### Example

```ts
import * as Pinterest from "@acdpsn/pinterest-scraper";

const postId = "https://www.pinterest.com/pin/1055599908066279/";
const response = await Pinterest.get(postId);
console.log(response);
```

### Output

```ts
{
  imageUrl: 'https://i.pinimg.com/originals/d1/40/ee/d140eefa29ded8d90579c222736a5f4c.jpg',
  imageName: 'Omori',
  imageTitle: 'Omori',
  description: 'Art by @hyeon__927 on twitter',
  uploaderName: 'Navi',
  uploaderUsername: 'The_Wired'
}
```

## Development

`tsc --watch`

## License

ISC
