import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model'

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  @Input() selectedFood: Food;
  @Output() doneButtonClicked = new EventEmitter();
  @Output() calorieSender = new EventEmitter();

  finishedEditing(){
    this.doneButtonClicked.emit();
    this.calorieSender.emit();
  }

}
