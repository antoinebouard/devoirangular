import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `<ul *ngFor="let personne of personnes">
              <li>{{ personne }}</li>
            <ul>`,
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  public personnes : string[] = ['Jean', 'Jacques', 'Martin'];

  constructor() { }

  ngOnInit(): void {
  }

}
