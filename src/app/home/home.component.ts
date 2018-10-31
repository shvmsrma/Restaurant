import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared_folder/dish';
import{DishService} from '../services/dish.service';
import {Promotion} from '../shared_folder/promotion';
import{PromotionService} from '../services/promotion.service';
import{LeaderService} from '../services/leaders.service';
import{Leader} from '../shared_folder/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  constructor(private dishService:DishService,
    private promotionService:PromotionService,
    private leaderService:LeaderService) { }

  ngOnInit() {
    this.dish=this.dishService.getFeaturedDish();
    this.promotion=this.promotionService.getFeaturedDish();
    this.leader=this.leaderService.getFeaturedLeader();
  }

}
