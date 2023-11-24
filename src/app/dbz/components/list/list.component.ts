import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  //Propiedad para emitir el evento que manda el indice para
  //Borrar el personaje
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  //Metodo para emitir el ID que se debe borrar
  onDeleteCharacter(id?: string): void {
    //TODO: Eminit el id del personaje
    console.log(id);
    //Esto evalua que si es diferente de un string que se salga del metodo y no emita el evento.
    if ( !id ) return;

    this.onDelete.emit( id );
  }
}
