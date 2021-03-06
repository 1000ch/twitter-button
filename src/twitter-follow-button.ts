export class TwitterFollowButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'width',
      'user',
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
    }).innerHTML = TwitterFollowButton.template;
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
    if (this.size !== 'l') {
      return '20';
    } else {
      return '28';
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
    const attributes: Record<string, string | null> = {
      screen_name: this.user,
      size: this.size
    };

    const query: string[] = Object.keys(attributes)
      .filter(key => attributes[key])
      .map(key => `${key}=${attributes[key]}`);

    return decodeURIComponent(`https://platform.twitter.com/widgets/follow_button.html?${query.join('&')}`);
  }
}
