import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import * as firebase from 'firebase';
import { CREDENTIALS } from '../credentials';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.initializeApp(CREDENTIALS);
  }
  user:User =
  {
    email :"",
    password:""
  }

  fun(user:User)
{
console.log(user)
firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then(result => {
  console.log("uid =",result.user.uid);
  

 

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}}
