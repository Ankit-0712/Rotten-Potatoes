import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
    username ="";
    password = "";
    errormsg = "";

    constructor(private auth:Auth, private router:Router){}

    login(){
      if(this.username.trim().length===0){
        this.errormsg = "username is required";
      }else if(this.password.trim().length===0){
        this.errormsg = "Password is required";
      }else{
        this.errormsg = "";
        let res = this.auth.login(this.username,this.password);

        if(res==200){
          this.router.navigate(['home'])

        }
        if(res == 403){
          this.errormsg = "Invalid Credential"
        }
      }
    }
}
