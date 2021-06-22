import { Component, OnInit, Pipe } from '@angular/core';
import { PokeAPIResult, Pokemon, PokemonInfo } from '../models';
import { PokeAPIServiceService } from '../poke-apiservice.service';


@Component({
  selector: 'app-pokelist',
  template: `<app-navbar></app-navbar>
            <div class="grid">
                <button [disabled]="this.apiResult.previous == null" (click)="previousPage(this.apiResult.previous)">Précedent</button>
                <button [disabled]="this.apiResult.next == null" (click)="nextPage(this.apiResult.next)">Suivant</button>
                <p>Page {{ this.pageNumber }} / {{ this.apiResult.count / 20 | number:'1.0-0'}}</p>
              <!-- <p>{{this.apiResult.count }}</p>
              <p>{{this.apiResult.previous }}</p>
              <p>{{this.apiResult.next }}</p> -->
              <div *ngFor="let pokemon of pokemons; let i = index">
                <app-pokecard [apiResult]="pokemon"></app-pokecard>
              </div>
            </div>`,
  styles: [`
  body {
    background: #E5E5E5;
  }
  :host {
    display: flex;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin: 60px auto;
  }
`]
})
export class PokelistComponent implements OnInit {

  public pokemons: PokemonInfo[];

  public apiResult: PokeAPIResult<PokemonInfo>;

  public pageNumber : number = 1;

  constructor(public api : PokeAPIServiceService) { }

  ngOnInit(): void {
    this.api.fetchPokemons('https://pokeapi.co/api/v2/pokemon/').subscribe((e) =>  this.apiResult = e);
    this.api.fetchPokemons('https://pokeapi.co/api/v2/pokemon/').subscribe((e) =>  this.pokemons = e.results);
  }

  nextPage(url : string) {
    this.api.fetchPokemons(url).subscribe((e) =>  this.apiResult = e);
    this.api.fetchPokemons(url).subscribe((e) =>  this.pokemons = e.results);
    this.pageNumber++;
  }

  previousPage(url : string) {
    this.api.fetchPokemons(url).subscribe((e) =>  this.apiResult = e);
    this.api.fetchPokemons(url).subscribe((e) =>  this.pokemons = e.results);
    this.pageNumber--;
  }
}

