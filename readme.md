# twitter-button ![GitHub Actions Status](https://github.com/1000ch/twitter-button/workflows/test/badge.svg?branch=master) [![devDependency Status](https://david-dm.org/1000ch/twitter-button/dev-status.svg)](https://david-dm.org/1000ch/twitter-button?type=dev)

Twitter button as Web Components.

## Install

Using npm:

```bash
$ npm install twitter-button
```

## Usage

Import and register scripts.

```html
<script type="module">
import { TwitterFollowButton } from 'https://unpkg.com/twitter-button/dist/twitter-follow-button.js';
import { TwitterHashtagButton } from 'https://unpkg.com/twitter-button/dist/twitter-hashtag-button.js';
import { TwitterMentionButton } from 'https://unpkg.com/twitter-button/dist/twitter-mention-button.js';
import { TwitterShareButton } from 'https://unpkg.com/twitter-button/dist/twitter-share-button.js';

customElements.define('twitter-follow-button', TwitterFollowButton);
customElements.define('twitter-hashtag-button', TwitterHashtagButton);
customElements.define('twitter-mention-button', TwitterMentionButton);
customElements.define('twitter-share-button', TwitterShareButton);
</script>
```

Just put `<twitter-follow-button>`, `<twitter-hashtag-button>`, `<twitter-mention-button>`, and `<twitter-share-button>` element in your HTML.

```html
<twitter-follow-button></twitter-follow-button>
<twitter-hashtag-button></twitter-hashtag-button>
<twitter-mention-button></twitter-mention-button>
<twitter-share-button></twitter-share-button>
```

### `TwitterFollowButton`

- `width`: number, width of `twitter-follow-button`
- `user`: string, Twitter ID to follow
- `size`: string, must be either `small` or `large`, default to `small`

### `TwitterHashtagButton`

- `width`: number, width of `twitter-hashtag-button`
- `text`: string, text to share
- `hashtag`: string, hashtag to attach
- `size`: string, must be either `small` or `large`, default to `small`

### `TwitterMentionButton`

- `width`: number, width of `twitter-mention-button`
- `user`: string, Twitter ID to mention
- `size`: string, must be either `small` or `large`, default to `small`

### `TwitterShareButton`

- `width`: number, width of `twitter-share-button`
- `url`: string, URL to share
- `user`: string, Twitter ID
- `text`: string, text to share
- `size`: string, must be either `small` or `large`, default to `small`

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
