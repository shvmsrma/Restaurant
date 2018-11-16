import { Injectable } from '@angular/core';
import { Dish } from '../shared_folder/dish';
import { DISHES } from '../shared_folder/dishes';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): Observable<Dish[]> {
    return of (DISHES).pipe(delay(2000));

    
  }
  getDish(id:string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id == id))[0]).pipe(delay(2000));
    
}
  getFeaturedDish():Observable<Dish>{
    return of(DISHES.filter((dish)=> dish.featured)[0]).pipe(delay(2000));
  
}
getDishIds():Observable<string[] | any>{
  return of(DISHES.map(dish => dish.id));
}
  constructor() { }
}
