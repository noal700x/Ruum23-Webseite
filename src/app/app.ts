import { Component } from '@angular/core';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { StarDividerComponent } from './components/star-divider/star-divider.component';
import { SunCrossComponent } from './components/sun-cross/sun-cross.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SiteHeaderComponent, SunCrossComponent, StarDividerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly navItems = [
    { label: 'Über uns', target: 'wer' },
    { label: 'Team', target: 'koepfe' },
    { label: 'Aktuell', target: 'aktuell' },
    { label: 'Kontakt', target: 'kontakt' },
  ];

  readonly people = [
    { name: 'Gabi Stäheli', alias: 'Hazel' },
    { name: 'Matthias Leu', alias: 'Speaker' },
    { name: 'Noa Löhrer', alias: 'Pfyn' },
  ];

  readonly currentHighlights = [
    'Jede 2. Ziischtig am 7i',
    'Bim Speaker oder de Hazel',
    'Genaui Infos jewiils im WA-Chat',
  ];

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
