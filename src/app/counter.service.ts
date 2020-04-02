import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counter: number = 0;
  
  display(){
    this.counter++;
    console.log("The state has changed "+ this.counter +" times");
  }
}
