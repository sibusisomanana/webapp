import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { InfoService } from '../info.service';
import { User } from '../user';
import { CREDENTIALS } from '../credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( ) { }
  user:User = {
    
    email:"",
    password:""
  };
  ngOnInit() {
  firebase.initializeApp(CREDENTIALS);
  }

  fun(user:User)
{

console.log("Clicked")
firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(result => {
  console.log(result.user.uid,result.user.email,'user logged in');
  //this.info.setuid(result.user.uid);
  //console.log(this.info.getuid())
  
{

}
}).catch((error) => {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  
});

}
}
