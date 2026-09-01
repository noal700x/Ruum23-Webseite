import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-divider',
  standalone: true,
  template: `
    <div class="divider" aria-hidden="true">
      @for (item of leftDots; track item) {
        <span class="dot" [class.light]="light"></span>
      }
      <span class="star" [class.light]="light">✦</span>
      @for (item of middleDots; track item) {
        <span class="dot" [class.light]="light"></span>
      }
      <span class="star" [class.light]="light">✦</span>
      @for (item of rightDots; track item) {
        <span class="dot" [class.light]="light"></span>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 0;
        margin: 1.5rem 0;
      }

      .dot {
        display: block;
        width: 6px;
        height: 1px;
        margin: 0 2px;
        background: rgba(26, 25, 23, 0.26);
      }

      .dot.light {
        background: rgba(255, 255, 255, 0.2);
      }

      .star {
        margin: 0 0.5rem;
        font-size: 0.75rem;
        line-height: 1;
        color: #e5a020;
      }

      .star.light {
        color: #e5a020;
      }
    `,
  ],
})
export class StarDividerComponent {
  @Input() light = false;

  readonly leftDots = Array.from({ length: 10 });
  readonly middleDots = Array.from({ length: 8 });
  readonly rightDots = Array.from({ length: 10 });
}
