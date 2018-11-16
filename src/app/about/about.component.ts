import { Component, OnInit } from '@angular/core';
import{Leader} from '../shared_folder/leader';
import {LEADERS} from '../shared_folder/leaders';
import{LeaderService} from '../services/leaders.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   
  leaders:Leader[];
  constructor(private leaderService:LeaderService) { 

  }

  ngOnInit() {
    this.leaderService.getLeaders()
    .subscribe((leaders) => this.leaders = leaders);;
  
  }


  
}
