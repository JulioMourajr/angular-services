import { Component, OnInit } from '@angular/core';
import { pokemonDados } from 'src/app/models/pokemonDados';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:pokemonDados = {
    id:0,
    name: '',
    sprites: {
      other: {
        dream_world:{
          front_default:''
        }
      }
    },
    types:[]
  }

  constructor(
    private service:PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon('bulbasaur')
  }

  getPokemon(nomePokemon: string){
    this.service.getPokemon(nomePokemon).subscribe(
      {
        next:(res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          console.log(res.id)
          console.log(this.pokemon)
        },
        error:(err) => {console.log(err)}
      })

  }

}
