# QR Web component

Using https://github.com/Rich-Harris/headless-qr


## Attributes/properties
- `input<string>`: the string that the QR Code will be created for
- `width<string>`: the width (also height, qr codes are square) in px, ie `150px`

## Styling

```css
/**
 * Set the color of the light parts of the QR Code
 */
qr-element.blue {
  background-color: gold; /** Usually white */
}
/**
 * Set the color of the dark parts of the QR Code
 */
qr-element.blue::part(canvas) {
  --canvas-fill: blue; /** Usually black */
}
```
