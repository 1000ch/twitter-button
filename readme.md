# twitter-button [![devDependency Status](https://david-dm.org/1000ch/twitter-button/dev-status.svg)](https://david-dm.org/1000ch/twitter-button?type=dev)

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
import { TwitterButton } from 'https://unpkg.com/twitter-button';

customElements.define('twitter-button', TwitterButton);
</script>
```

Just put `<twitter-button>` element in your HTML.

```html
<twitter-button></twitter-button>
```

- `type`: string, must be any one of **follow**, **share**, **hashtag** or **mention**
- `width`: number, width of `twitter-button`
- `height`: number, height of `twitter-button`
- `user`: string, Twitter ID
- `text`: string, text to share
- `hashtag`: string, hashtag to attach

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
