import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model'

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Output() newFoodSender = new EventEmitter();


  submitForm(name: string, description: string ,calories: number) {
    var newFood: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newFood);

  }





}
