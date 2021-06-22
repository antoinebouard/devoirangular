import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Pokemon } from './models';

@Injectable({
  providedIn: 'root'
})
export class AdoptionServiceService {

  adoptedPokemon = new BehaviorSubject<Pokemon[]>([]);
  unadoptedPokemon : Pokemon[];

  get observable() {
    return this.adoptedPokemon.asObservable();
  }

  constructor() { }

  adopt(pokemon : Pokemon) {
    this.adoptedPokemon.next([...this.adoptedPokemon.value, pokemon]);
  }

  unadopt(pokemon : Pokemon) {
    this.adoptedPokemon.next(this.adoptedPokemon.value.filter(value => value.id != pokemon.id));
  }
}


