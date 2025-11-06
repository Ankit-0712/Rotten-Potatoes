import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(private router: Router, private auth : Auth){}
  goToHome(){
    this.router.navigate(['home']);

  }

  logout(){
    // delegate logout navigation to the Auth service
    this.auth.logout();
  }
}
