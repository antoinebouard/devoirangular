import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeAPIResult, Pokemon, PokemonInfo} from './models';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {



  constructor(
    private client: HttpClient
  ) {

  }

  fetchPokemons(url : string) {
    return this.client.get<PokeAPIResult<PokemonInfo>>(url);
  }

  fetchPokemon(url : string) {
    return this.client.get<Pokemon>(url);
  }
}
