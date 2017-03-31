import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods: Food[] = [
    new Food('Burrito', 'It was a delicious Chipotle burrito', 875)
  ];

  addFood(newFood: Food) {
    this.foods.push(newFood);
  }

}
