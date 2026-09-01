import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SunCrossComponent } from '../sun-cross/sun-cross.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [SunCrossComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  @Input() navItems: { label: string; target: string }[] = [];
  @Output() navigate = new EventEmitter<string>();

  menuOpen = false;

  onNavigate(target: string): void {
    this.navigate.emit(target);
    this.menuOpen = false;
  }
}
