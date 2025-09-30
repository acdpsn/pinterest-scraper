# pinterest-scraper

Fetch information about a pin, board, user, and more without an api key or access token.

## Installation

```sh
npm install @acdpsn/pinterest-scraper
```

### Import

```ts
import * as Pinterest from "@acdpsn/pinterest-scraper";
```

### Example

```ts
import * as Pinterest from "@acdpsn/pinterest-scraper";

const postId = "849984129711185550";
const response = await Pinterest.getPins(postId);
console.log(response);
```

### Output

```ts
{
  post: undefined,
  username: '',
  followers: '',
  image: '',
  url: ''
}
```

## License

ISC
