import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import {pokemonDados} from 'src/app/models/pokemonDados'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = ''
  private pokeDados: pokemonDados | any ;

  constructor(
    private http: HttpClient  
  ) {
    this.baseURL = environment.pokeApi
   }
   getPokemon(pokemonName:string):Observable<pokemonDados> {
    this.pokeDados = 
    this.
    http.
    get<pokemonDados>
    (`${this.baseURL}${pokemonName}`)
    return this.pokeDados
  }
}
