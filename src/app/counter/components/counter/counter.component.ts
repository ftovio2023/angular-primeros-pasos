import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

      <h3>Counter: {{ counter }}</h3>

      <button (click)="increaseBy(1)">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>


  `
})

export class CounterComponent {
  constructor() { }

    public counter: number = 10;

    //Esto fue mi forma de hacerlo
    // increaseBy( argumento: string ):void {
    //   if (argumento == '+') {
    //     this.counter += 1;
    //   } else {
    //   this.counter -= 1;
    //   }

    // }

    //Esta la forma de fernando
    increaseBy( value: number): void {
      this.counter +=  value;
    }

    resetCounter(): void {
      this.counter = 10;
    }
}
