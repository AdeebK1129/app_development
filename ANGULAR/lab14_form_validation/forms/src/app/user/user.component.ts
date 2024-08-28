import { Component } from '@angular/core';
import { User } from './user.model';
import { User_Repository } from './repository.model';
import { FormsModule } from '@angular/forms' // to work with Angular Directive *ng
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

  get jsonUser(){
    return JSON.stringify(this.newuser)
  }

  addUser(u:User){
    console.log("New User is " + this.jsonUser)
  }

  displayLog(model:any){
    console.log("New User Model", model)
  }
}
