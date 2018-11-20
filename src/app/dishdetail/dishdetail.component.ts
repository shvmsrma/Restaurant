import { Component, OnInit, Input,ViewChild } from '@angular/core';
import{Params,ActivatedRoute} from '@angular/router';
import{Location} from '@angular/common';
import { Dish } from '../shared_folder/dish';
import {DishService} from '../services/dish.service';
import {switchMap} from 'rxjs/operators';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Comment} from '../shared_folder/comment'
import {DISHES} from '../shared_folder/dishes';
import 'hammerjs';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})



export class DishdetailComponent implements OnInit {
  
  formErrors =  {

    'name':'',
    'rating':'',
    'comment':''
}

ValidationMessages={

    'name':{
      'required':'First name is required',
      'minLength':'First name be atleast 2 characters',
      'maxLength':'First Name cannot be more than 25 characters',
    },
    'rating':{
      'required': 'Rating is required'
    },
    'comment':{
      'required': 'Comment is required'
    }


}


  dish : Dish;
  dishIds:string[];
  prev:string;
  next:string;
  comment : Comment;
  commentForm:FormGroup;
  dishes = DISHES;
  @ViewChild('fform') commentFormDirective;

  

  constructor(private fb : FormBuilder,
    private dishService:DishService,
    private route:ActivatedRoute,
    private location:Location) {

      this.createForm()


     }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack():void{
    this.location.back();
  }
createForm(){
  this.commentForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
    rating : ['',[Validators.required]],
    comment:['',[Validators.required]]

});

this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
}

onValueChanged(data?: any) {
  if (!this.commentForm) { return; }

  const form = this.commentForm;

  for (const field in this.formErrors) {
    this.formErrors[field] = '';

    const control = form.get(field);

    if (control && control.dirty && !control.valid) {
      const messages = this.ValidationMessages[field];

      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
  this.comment = /*(form.valid) ? */form.value/* : null*/;
}



onSubmit(){

  this.comment =  this.commentForm.value;
  console.log(this.comment.rating);
  this.comment.date = new Date().toISOString();
  this.dish.comments.push(this.comment);
  this.commentForm.reset({
    name:'',
    rating:1,
    comment:''
  });
  this.commentFormDirective.resetForm();
}


}




