import { Component, OnInit,ViewChild } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Feedback,ContactType} from '../shared_folder/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})




export class ContactComponent implements OnInit {

  feedbackForm:FormGroup;
  feedback:Feedback;
  contactType=ContactType;
  @ViewChild('fform') feedbackFormDirective;

  

  formErrors = {
    'firstname':'',
    'lastname':'',
    'telnum':'',
    'email':''
  };

  validationMessages = {
    'firstname':{
      'required':'First name is required',
      'minLength':'First name be atleast 2 characters',
      'maxLength':'First Name cannot be more than 25 characters',
    },
    'lastname':{
      'required':'Last name is required',
      'minLength':'Last name must be atleast 2 characters',
      'maxLength':'Last Name cannot be more than 25 characters',
    },
    'telnum':{
      'required':'Telephone Number is required',
      'pattern':'Telephone Number must contain only numbers.'
    },
    'email':{
      'required':'Email is requied',
      'email':'Email not in valid format'
    }

  };


  constructor(private fb: FormBuilder) {
    this.createForm()
   }

  ngOnInit() {
  }
 createForm(){
  this.feedbackForm=this.fb.group({
    firstname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
    lastname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
    telnum:[0,[Validators.required,Validators.pattern]],
    email:['',[Validators.required,Validators.email]],
    agree:false,
    contacttype:'None',
    message:''

  });
  this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
 this.onValueChanged(); // (re)set form Validation Messages
 }
 onValueChanged(data?:any){
   if(!this.feedbackForm){return;}
   const form = this.feedbackForm;
   for(const field in this.formErrors){
     if(this.formErrors.hasOwnProperty(field)){
         // clear previous error messages(if any)
         this.formErrors[field] = '';
         const control = form.get(field);
         if(control && control.dirty && !control.valid){
           const messages  = this.validationMessages[field];
           for (const key in control.errors){
             if (control.errors.hasOwnProperty(key)){
               this.formErrors[field] += messages[key] + ''; 
             }
           }
         }
     }
   }
 }
 
 onSubmit() {
  this.feedback = this.feedbackForm.value;
  console.log(this.feedback);
  this.feedbackForm.reset({
    firstname:'',
    lastname:'',
    telnum:0,
    email:'',
    agree:false,
    contacttype:'None',
    message:''
  });
  this.feedbackFormDirective.resetForm();
}
}
