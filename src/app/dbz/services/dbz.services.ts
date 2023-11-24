import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({//Este es nuestro decorador
  providedIn: 'root'
})
export class DbzService {

    //Arreglo de personaje
    public characters: Character[] = [{
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Vegueta',
      power: 7500
    }]

    addCharacter( character: Character): void {
      // console.log('Main Page');
      // console.log(character);

      //Creando constante que agrege id al onjeto que se esta ingresando
      const newCharacter: Character = {id: uuid(), ...character};

      this.characters.push(newCharacter);
    }

    // //Metodo de borrar por indice
    // onDelete( index: number): void {
    //   console.log('Main Page');
    //   console.log(index);
    //   //Aca el metodo splice le pasamos el indice y que solo elimine 1 elemento
    //   //Si no se le especifica que es 1 elemento borra todos los elementos
    //   //Despues del indice que se le pasa
    //   this.characters.splice(index, 1);
    // }

    //Metodo para borrar por Id
    deleteCharacterById( id: string) {
      //Metodo que recorre todo el arreglo y retorna todos los elementos que no cumplen
      //Con el Id que se paso por parametro
      this.characters = this.characters.filter( character => character.id !== id );
    }

}
