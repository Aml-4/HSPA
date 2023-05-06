import { Component } from '@angular/core';
import { AlertfiyService } from '../services/alertfiy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedUserName :any;
constructor(private alertify:AlertfiyService){}
onloggedIn(){
   this.loggedUserName=localStorage.getItem('token')

  return localStorage.getItem('token')
}
Logout(){
  localStorage.removeItem('token')
this.alertify.success("You Are Logged Out Successfully")
}
}
