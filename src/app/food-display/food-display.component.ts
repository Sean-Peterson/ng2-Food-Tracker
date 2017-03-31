import { Component, OnInit, Input} from '@angular/core';
import { Food } from '../food.model'

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Input() foods: Food[];


}
