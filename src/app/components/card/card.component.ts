import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemonName: string ='Pikachu!';
  urlImagem: string ='';
  tiposDeAtributos: string[] = ['Fire', 'Ice'];



  constructor() { }

  ngOnInit(): void {
  }

}
