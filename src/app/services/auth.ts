import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private router : Router){}
  
  login(uname:string,pword:string){
    if(uname=='ankit' && pword=='1234'){
      return 200;
    }
    else{
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login']);
  }
}
