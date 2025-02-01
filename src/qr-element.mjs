import { qr } from 'headless-qr';

const css = `:host {
  display: inline-block;
  background-color: #fff;
  padding-block: .1rem;
  padding-inline: .1rem;
}
::part(canvas), canvas {
  --canvas-fill: #000;
  aspect-ratio: 1;
  image-rendering: pixelated;
}`;

export class QrElement extends HTMLElement {
  static get observedAttributes() { return ['input', 'width']; }

  get input() { return this._input; }
  get width() { return this._width; }

  set input(value) {
    this._input = value;
    this.setAttribute('input', value);
  }
  set width(value) {
    this._width = value;
    this.setAttribute('width', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue === oldValue) return;
    switch (name) {
      case 'input':
        this._input = newValue;
        this._renderCanvas();
        break;
      case 'width':
        this._width = newValue;
        this.setWidth();
        break;
    }
  }

  _upgradeProperty(prop) {
    if (Object.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    this._width = '400px';
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('part', 'canvas')
    style.textContent = css;
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(this.canvas);
  }

  connectedCallback() {
    this._upgradeProperty('input');
    this._upgradeProperty('width');
    this.setWidth();
    this._renderCanvas();
  }

  setWidth() {
    this.canvas.style.width = this.width;
    this.style.width = `calc(${this.width} + .2rem)`;
  }

  _renderCanvas() {
    const modules = qr(this.input);
    const ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvas.height = modules.length;
    ctx.fillStyle = getComputedStyle(this.canvas).getPropertyValue('--canvas-fill');

    modules.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }
}
