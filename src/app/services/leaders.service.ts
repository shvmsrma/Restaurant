import { Injectable } from '@angular/core';
import { Leader } from '../shared_folder/leader';
import { LEADERS } from '../shared_folder/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }
  getLeader(id:string):Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader)=>(leader.id==id))[0]);
  }
  getFeaturedLeader():Promise<Leader>{

return Promise.resolve(LEADERS.filter((leader)=> leader.featured)[0]);
  }
  constructor() { }
}
