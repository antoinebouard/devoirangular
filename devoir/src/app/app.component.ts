import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input type="text" [(ngModel)]="text"/><br>
             <span>Texte : {{ text }}</span><br>
             <button (click)="delete()">Reset</button><br>
             <app-list-component *ngIf="show"></app-list-component>
             <button (click)="showorunshow()">{{ this.show == true ? 'Cacher' : 'Afficher'}}</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show : boolean = true;;

  text : string;

  title = 'devoir';


  delete() {
    this.text = "";
  }

  showorunshow() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
