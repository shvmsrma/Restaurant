import { Injectable } from '@angular/core';
import { Promotion } from '../shared_folder/promotion';
import { PROMOTIONS } from '../shared_folder/promotions';
import { Observable,of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getPromotions(): Observable<Promotion[]> {
    return of (PROMOTIONS).pipe(delay(2000));

}
  getPromotion(id:string):Observable<Promotion>{
    return of (PROMOTIONS.filter((promotion)=>(promotion.id==id))[0]).pipe(delay(2000));
  
}
  getFeaturedPromotion():Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion)=> promotion.featured)[0]).pipe(delay(2000));

}
  constructor() { }
}
