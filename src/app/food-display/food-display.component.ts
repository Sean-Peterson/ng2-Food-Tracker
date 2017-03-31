import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';
import { CaloriePipe } from '../calorie.pipe';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    this.calorieSender.emit()
  }
  @Input() foods: Food[];
  @Input() totalCaloricIntake: number;
  @Output() clickSender = new EventEmitter();
  @Output() calorieSender = new EventEmitter();

  editButton(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  filterByCalories: string = "";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

}
