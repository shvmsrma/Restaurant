import { Injectable } from '@angular/core';
import { Leader } from '../shared_folder/leader';
import { LEADERS } from '../shared_folder/leaders';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));

}
  getLeader(id:string):Observable<Leader>{
    return of(LEADERS.filter((leader)=>(leader.id==id))[0]).pipe(delay(2000));
  
}

  getFeaturedLeader():Observable<Leader>{
    return of(LEADERS.filter((leader)=> leader.featured)[0]).pipe(delay(2000));

}
  constructor() { }
}
