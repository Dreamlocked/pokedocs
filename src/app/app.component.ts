import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import data from '../assets/data/pokedex.json';
import { Base, Name, Pokemon } from './models/Pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedocs';
  faSearch = faSearch;

  // Input del pokemon a seleccionar
  nombrePokemon:string = "";
  nombrePokemonant:string = "Bulbasaur";
  pokemon: any = encontrar("Bulbasaur");
  danger:boolean = false;

  encontrarConvertir(){
    this.pokemon = encontrar(this.nombrePokemon);
    if(this.pokemon === false){
      this.danger = true;
      this.nombrePokemon = "";
      this.pokemon = encontrar(this.nombrePokemonant);
    }else{
    this.nombrePokemonant = this.nombrePokemon;
    this.nombrePokemon = "";
    this.danger = false;

  }
  }
}

function encontrar(nombrePokemon: string):any {
  
  for (const iterator of data) {
    if ( nombrePokemon === iterator.name.english) {
      let id = iterator.id;
     
      let english = iterator.name.english;
      let japanese = iterator.name.japanese;
      let name: Name ={english, japanese}

      let type: string[] = iterator.type;

     
      let hp = iterator.base.HP;
      let attack = iterator.base.Attack;
      let defense = iterator.base.Defense;
      let spAttack = iterator.base["Sp. Attack"];
      let spDefense = iterator.base["Sp. Defense"];
      let speed = iterator.base["Speed"];

      let base: Base = {hp,attack, defense, spAttack,spDefense,speed}

      let pokemon:Pokemon = {id, name, type, base};
      return pokemon
      }
    }
    return false
  }


  
