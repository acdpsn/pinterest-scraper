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

const postId = "849984129711185550";
const response = await Pinterest.get(postId);
console.log(response);
```

### Output

```ts
{
  imageUrl: 'https://i.pinimg.com/originals/e0/cd/25/e0cd2543105c9a6bb29786eefef6980c.jpg',
  imageName: '',
  imageTitle: ' ',
  uploaderName: 'луна',
  uploaderUsername: 'busr4_v97'
}
```

## Development

`tsc --watch`

## License

ISC
