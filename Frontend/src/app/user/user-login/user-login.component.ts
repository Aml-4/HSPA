import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertfiyService } from 'src/app/services/alertfiy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(private auth:AuthService,private alertify:AlertfiyService, private route:Router) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm){
    console.log(loginForm.value)
    console.log(loginForm)
let token = this.auth.authUser(loginForm.value)
      if(token){
        localStorage.setItem('token',token.userName)
        this.alertify.success("Login Succeedded")
        this.route.navigate(['/'])
      }else{
        this.alertify.error("Login Failed")
      }
  }
}
