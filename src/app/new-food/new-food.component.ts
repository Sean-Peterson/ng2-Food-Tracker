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

  formShowing: boolean = false;

  showForm() {
    this.formShowing = true;
  }

  hideForm() {
    this.formShowing = false;
  }

  submitForm(name: string, details: string ,calories: number) {
    var newFood: Food = new Food(name, details, calories);
    this.newFoodSender.emit(newFood);

  }





}
