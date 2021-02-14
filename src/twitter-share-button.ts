export class TwitterShareButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'width',
      'url',
      'user',
      'text',
      'size'
    ];
  }

  static get template(): string {
    return `
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <iframe allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = TwitterShareButton.template;
  }

  connectedCallback(): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    iframe.width = `${this.width}px`;
    iframe.height = this.defaultHeight;
    iframe.src = this.inlineFrameSource;
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    switch (attributeName) {
      case 'width':
        iframe[attributeName] = `${newValue}px`;
        break;
      default:
        iframe.src = this.inlineFrameSource;
        break;
    }
  }

  get width(): string | null {
    return this.getAttribute('width');
  }

  set width(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('width');
    } else {
      this.setAttribute('width', value);
    }
  }

  get defaultHeight(): string {
    if (this.size !== 'large') {
      return '20';
    } else {
      return '28';
    }
  }

  get url(): string | null {
    return this.getAttribute('url');
  }

  set url(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('url');
    } else {
      this.setAttribute('url', value);
    }
  }

  get text(): string | null {
    return this.getAttribute('text');
  }

  set text(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('text');
    } else {
      this.setAttribute('text', value);
    }
  }

  get user(): string | null {
    return this.getAttribute('user') || '';
  }

  set user(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('user');
    } else {
      this.setAttribute('user', value);
    }
  }

  get size(): string | null {
    return this.getAttribute('size') || '';
  }

  set size(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('size');
    } else {
      this.setAttribute('size', value);
    }
  }

  get inlineFrameSource(): string {
    const BASE_URL = 'https://platform.twitter.com/widgets';
    const url = `${BASE_URL}/tweet_button.html?url=${this.url}&via=${this.user}&text=${this.text}&size=${this.size}`;

    return decodeURIComponent(url);
  }
}
