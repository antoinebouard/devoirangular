import { Component, Input, OnInit } from '@angular/core';
import { AdoptionServiceService } from 'src/app/adoption-service.service';
import { PokeAPIServiceService } from 'src/app/poke-apiservice.service';
import { Pokemon, PokemonInfo } from '../../models';

@Component({
  selector: 'app-pokecard',
  template: `
            <div class="card">
              <p class="pokemonname">{{ pokemon?.name }}</p>
              <p>Taille : {{ pokemon?.height /10 }} m</p>
              <p>Poids : {{ pokemon?.weight / 10}}kg</p>
              <p>Types :</p>
              <ul>
                  <li *ngFor="let type of pokemon?.types;">
                    <p class="capitalize">{{ type.type.name }}</p>
                  </li>
              </ul>
              <p>Compétences :</p>
              <ul>
                  <li *ngFor="let ability of pokemon?.abilities;">
                    <p class="capitalize">{{ ability.ability.name }}</p>
                  </li>
              </ul>
              <img src="{{ pokemon?.sprites.other['official-artwork'].front_default }}" style="height: 50%;">
              <button mat-raised-button color="primary" class="button" (click)="adoptUnadopt()">{{ this.adoptedOrNot == true ? 'Relacher' : 'Adopter'}}</button>
            </div>`,
  styles: [`
    .card {
      width: 297px;
      height: 350px;
      left: 740px;

      background: #FFFFFF;
      border: 1px solid #D5DFE7;
      box-sizing: border-box;
      border-radius: 4px;
    }
    div {position : relative;}
    img {position : absolute; top : 25%; right : 0;}
    .pokemonname {
      text-align : center;
      text-transform: capitalize;
    }
    .button {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-right : 10px;
      margin-bottom : 10px;
    }
    .capitalize {
      text-transform: capitalize;
    }

  `]
})
export class PokecardComponent implements OnInit {

  public pokemon ?: Pokemon;

  public adoptedOrNot : boolean = false;

  @Input() set apiResult(apiResult : PokemonInfo) {
    this.api.fetchPokemon(apiResult.url).subscribe((e) => this.pokemon = e);
  }

  constructor(public api : PokeAPIServiceService, public adoptedService : AdoptionServiceService) {
    this.adoptedService.observable.subscribe(list => {
      this.adoptedOrNot = list.find(p => this.pokemon?.id == p.id) != undefined

    })
  }

  ngOnInit(): void {
  }

  adoptUnadopt() : void {
    if(this.adoptedOrNot) {
      this.adoptedOrNot = false;
      this.adoptedService.unadopt(this.pokemon);
    } else {
      this.adoptedOrNot = true;
      this.adoptedService.adopt(this.pokemon);
    }
  }

}
