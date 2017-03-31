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

  selectedFood = null;

  addFood(newFood: Food) {
    this.foods.push(newFood);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

}
