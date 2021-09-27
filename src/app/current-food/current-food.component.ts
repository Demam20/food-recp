import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { ICurrentfood } from '../icurrentfood';

@Component({
  selector: 'app-current-food',
  templateUrl: './current-food.component.html',
  styleUrls: ['./current-food.component.css']
})
export class CurrentFoodComponent implements OnInit {
  current: ICurrentfood
  constructor(private foodService: FoodService) {
    
      
   }

  ngOnInit() {
    this.foodService.getCurrentFood(10 , 
    50 ).subscribe(data => this.current = data);
  }

}
