import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sun-cross',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="28" fill="#E5A020" />
      <line
        x1="28"
        y1="9"
        x2="28"
        y2="45"
        stroke="#1A1917"
        stroke-width="3.5"
        stroke-linecap="round"
      />
      <line
        x1="17"
        y1="21"
        x2="39"
        y2="21"
        stroke="#1A1917"
        stroke-width="3.5"
        stroke-linecap="round"
      />
      <ellipse cx="28" cy="44" rx="8" ry="2.5" stroke="#1A1917" stroke-width="2" />
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        line-height: 0;
      }
    `,
  ],
})
export class SunCrossComponent {
  @Input() size = 56;
}
