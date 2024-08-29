import { Component } from '@angular/core';
import { User } from './user.model';
import { User_Repository } from './repository.model';
import { FormsModule, NgForm } from '@angular/forms' // to work with Angular Directive *ng
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  model:User_Repository = new User_Repository()
  newuser:User = new User()
  parsedJson:any
  parsedJsonName:any
  parsedJsonEmail:any
  usercounter:number = this.model.getUser().length

  get jsonUser(){
    return JSON.stringify(this.newuser)
  }

  addUser(u:User){
    console.log("New User is " + this.jsonUser)
    this.usercounter += 1
    this.model.addUser(new User(this.usercounter, this.parsedJsonName, this.parsedJsonEmail))
  }

  displayLog(model:any){
    console.log("New User Model", model)
  }

  // formSubmit property to set the validation rule
  formSubmit:boolean = false

  // submitForm() method to handle the form data on submission
  submitForm(form:NgForm){
    this.formSubmit = true
    if(form.valid){
      this.parsedJson = JSON.parse(JSON.stringify(this.newuser))
      this.parsedJsonName = this.parsedJson.name
      this.parsedJsonEmail = this.parsedJson.email
      this.addUser(this.newuser)
      this.newuser = new User()
      form.reset()
      this.formSubmit = false
    }
  }

}
