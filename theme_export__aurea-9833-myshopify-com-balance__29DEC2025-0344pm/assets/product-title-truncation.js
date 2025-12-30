import { Component } from '@theme/component';

/** @typedef {typeof globalThis} Window */

/**
 * A component that handles title truncation with responsive behavior
 *
 * @typedef {Object} Refs
 * @property {HTMLElement} [text] - The text element to truncate (optional)
 *
 * @extends {Component<Refs>}
 */
class ProductTitle extends Component {
  /** @type {ResizeObserver | undefined} */
  resizeObserver;

  /**
   * Bound resize handler - FIXED (Linus): Must use arrow function to preserve reference
   * for proper cleanup in disconnectedCallback
   */
  #boundResizeHandler = () => this.#calculateTruncation();

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#initializeTruncation();
  }

  /**
   * Initialize the title truncation
   */
  #initializeTruncation() {
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        this.#calculateTruncation();
      });

      this.resizeObserver.observe(this);
      this.#calculateTruncation();
    } else {
      /** @type {Window} */
      (window).addEventListener('resize', this.#boundResizeHandler);
      this.#calculateTruncation();
    }
  }

  /**
   * Calculate truncation for the title
   */
  #calculateTruncation() {
    /** @type {HTMLElement} */
    const textElement = this.refs.text || this.querySelector('.title-text') || this;
    if (!textElement.textContent) return;

    const containerHeight = this.clientHeight;

    const computedStyle = window.getComputedStyle(this);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);

    const availableHeight = containerHeight - paddingTop - paddingBottom;
    const maxLines = Math.max(1, Math.floor(availableHeight / lineHeight));

    textElement.style.display = '-webkit-box';
    textElement.style.webkitBoxOrient = 'vertical';
    textElement.style.overflow = 'hidden';
    textElement.style.textOverflow = 'ellipsis';
    textElement.style.webkitLineClamp = String(maxLines);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    // FIXED (Linus): Now correctly removes the same function reference
    window.removeEventListener('resize', this.#boundResizeHandler);
  }
}

if (!customElements.get('product-title')) {
  customElements.define('product-title', ProductTitle);
}

export default ProductTitle;

