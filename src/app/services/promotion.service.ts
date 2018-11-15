import { Injectable } from '@angular/core';
import { Promotion } from '../shared_folder/promotion';
import { PROMOTIONS } from '../shared_folder/promotions';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }
  getPromotion(id:string):Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promotion)=>(promotion.id==id))[0]);
  }
  getFeaturedPromotion():Promise<Promotion>{

  return Promise.resolve(PROMOTIONS.filter((promotion)=> promotion.featured)[0])
  }
  constructor() { }
}
