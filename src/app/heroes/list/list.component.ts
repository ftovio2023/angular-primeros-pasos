import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  //Se coloca opcional para no tener que inicializarla
  public deteledHero?: string;

  //Metodo para remover el ultimo heroe
  removeLastHero(): void {
    this.deteledHero = this.heroNames.pop();
    // console.log( {deleteHero} );
  }

}
