import { qr } from 'headless-qr';

export class QrElement extends HTMLElement {
  static get observedAttributes() { return ['input', 'width']; }

  get input() { return this._input; }
  get width() { return this._width; }

  set input(value) {
    this._input = value;
    this.setAttribute('input', this.input);
    this._renderCanvas();
  }
  set width(value) {
    this._width = Number.parseInt(value, 10);
    this.setAttribute('width', `${this.width}px`);
    this.setAttribute('height', `${this.width}px`);
    this.setWidth();
    this._renderCanvas();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue === oldValue) return;
    switch (name) {
      case 'input':
        this._input = newValue;
        break;
      case 'width':
        this._width = Number.parseInt(newValue, 10);
        this.setWidth();
        break;
    }
    this._renderCanvas();
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
    this._width = 300;
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('part', 'canvas')
    style.textContent = `:host { display: block; background-color: #fff } ::part(canvas), canvas { --canvas-fill: #000; aspect-ratio: 1; image-rendering: pixelated }`;
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
    this.canvas.style.width = `${this.width}px`;
    this.style.width = `${this.width}px`;
    this.style.height = `${this.width}px`;
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
