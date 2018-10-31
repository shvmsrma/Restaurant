import { Injectable } from '@angular/core';
import { Leader } from '../shared_folder/leader';
import { LEADERS } from '../shared_folder/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id:string):Leader{
    return LEADERS.filter((leader)=>(leader.id==id))[0];
  }
  getFeaturedLeader():Leader{

return LEADERS.filter((leader)=> leader.featured)[0]
  }
  constructor() { }
}
