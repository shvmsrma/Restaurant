import { Injectable } from '@angular/core';
import { Dish } from '../shared_folder/dish';
import { DISHES } from '../shared_folder/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }
  getDish(id:string):Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>(dish.id==id))[0]);
  }
  getFeaturedDish():Promise<Dish>{

  return Promise.resolve(DISHES.filter((dish)=> dish.featured)[0])
  }
  constructor() { }
}
