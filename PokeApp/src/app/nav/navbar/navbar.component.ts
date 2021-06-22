import { Component, OnInit } from '@angular/core';
import { AdoptionServiceService } from 'src/app/adoption-service.service';
import { PokecardComponent } from 'src/app/pokelist/pokecard/pokecard.component';
import { Pokemon } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  template: `<div>
              <button class="adopted" mat-button [matMenuTriggerFor]="aboveMenu"><span matBadge="{{adoptedPokemon.length}}" matBadgeOverlap="false">Adopté</span></button>
              <mat-menu #aboveMenu="matMenu" yPosition="above">
                <div *ngIf="adoptedPokemon.length == 0">Pas de pokémon adopté :(</div>
                <div *ngFor="let pokemon of adoptedPokemon">
                  <p>
                    <img src="{{ pokemon?.sprites.other['official-artwork'].front_default }}" style="height: 10%; width : 10%;">
                    <span class="capitalize">{{ pokemon.name }}</span>
                    <button mat-menu-item (click)="adoptedService.unadopt(pokemon)">X</button>
                  </p>
                </div>
              </mat-menu>
            </div>`,
  styles: [`
  .capitalize {
    text-transform: capitalize;
  }
  .adopted {
    position : absolute;
    right : 5%;
  }
  /* div {
    /* background: #EF5350; */
    /* position:fixed;
    width:100%;
    height:40px; */
    /* text-align:center;
    vertical-align:middle; */
    /* line-height:50px; */
    /* top:0px; */
  /*} */
  `]
})
export class NavbarComponent implements OnInit {

  public adoptedPokemon ?: Pokemon[];

  constructor(public adoptedService : AdoptionServiceService) {
    adoptedService.observable.subscribe((e => this.adoptedPokemon = e));
   }

  ngOnInit(): void {
  }

  deletePokemon(pokemon : Pokemon) {
    this.adoptedService.unadopt(pokemon);
  }

}
