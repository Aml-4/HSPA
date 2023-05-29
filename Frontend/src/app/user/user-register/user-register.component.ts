import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, FormBuilder} from '@angular/forms'
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertfiyService } from 'src/app/services/alertfiy.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm !:FormGroup;
  _User !: User;
  FormErrorSubmit:boolean=false;
  constructor(private fb:FormBuilder, private userService:UserServiceService, private alertifyservice:AlertfiyService, private route:Router) { }
 /* Reactive Forms => Works Sync And that's what make them predictable
    while Template Driven Forms => Works ASync and that's what make them unpredictable
 */
  ngOnInit() {
    // this.registrationForm =new FormGroup({
    //   UserName :new FormControl(null,Validators.required),
    //   Email:new FormControl(null,[Validators.required,Validators.email]),
    //   Password :new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   ConfirmPassword :new FormControl(null,Validators.required),
    //   Mobile :new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)])
    // },this.PasswordMatchingValidator)

    this.createRegisterationForm();
  }
  createRegisterationForm(){
    this.registrationForm = this.fb.group({
      UserName: [null,Validators.required],
      Email : [null,[Validators.required,Validators.email]],
      Password: [null,[Validators.required,Validators.minLength(8)]],
      ConfirmPassword: [null,Validators.required],
      Mobile:[null,[Validators.required,Validators.min(0),Validators.maxLength(10),Validators.minLength(10)]]
    },{validator:this.PasswordMatchingValidator})
  }
  // PasswordMatchingValidator(fg:FormGroup):Validators|null{
  //   return fg.get('Password')?.value === fg.get('ConfirmPassword')?.value ? null:{NotMatched:true}
  // }
  PasswordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('Password')?.value === fc.get('ConfirmPassword')?.value ? null :
      { NotMatched : true }
  };

  UserData () : User {
    return this._User={
      userName:this.UserName.value,
      email:this.Email.value,
      password:this.Password.value,
      mobile:this.Mobile.value
    }
  }
  get UserName(){
    return this.registrationForm.get('UserName') as FormControl;
  }
  get Email(){
    return this.registrationForm.get('Email') as FormControl;
  }
  get Password(){
    return this.registrationForm.get('Password') as FormControl;
  }
  get ConfirmPassword(){
    return this.registrationForm.get('ConfirmPassword') as FormControl;
  }
  get Mobile(){
    return this.registrationForm.get('Mobile') as FormControl;
  }
  onSubmit(){
    console.log(this.registrationForm.value)
    this.FormErrorSubmit=true;
    if(this.registrationForm.valid){
      //this._User =Object.assign(this._User,this.registrationForm.value)
      //this.userService.addUsers(this._User)
      this.userService.addUsers(this.UserData())
      this.registrationForm.reset();
      this.FormErrorSubmit=false;
      this.alertifyservice.success("Congrats, You successfully Registered")
      this.route.navigate(['user/Login'])
    }else{
      this.alertifyservice.error("Kindly provide the required data")

    }

  }
}
