import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

  constructor( private dbzService: DbzService) {};

  get  characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter(character: Character ): void {
    this.dbzService.addCharacter( character );
  }

}
