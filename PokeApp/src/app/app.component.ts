import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-pokelist></app-pokelist>
  `,
  styles: [`
    :host {
      display: flex;
    }
  `]
})
export class AppComponent {
  title = 'poke-adopt';
}
