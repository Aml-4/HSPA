import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors, AbstractControl} from '@angular/forms'
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm !:FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm =new FormGroup({
      UserName :new FormControl(null,Validators.required),
      Email:new FormControl(null,[Validators.required,Validators.email]),
      Password :new FormControl(null,[Validators.required,Validators.minLength(8)]),
      ConfirmPassword :new FormControl(null,Validators.required),
      Mobile :new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)])
    },this.PasswordMatchingValidator)
  }
  // PasswordMatchingValidator(fg:FormGroup):Validators|null{
  //   return fg.get('Password')?.value === fg.get('ConfirmPassword')?.value ? null:{NotMatched:true}
  // }
  PasswordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('Password')?.value === fc.get('ConfirmPassword')?.value ? null :
      { NotMatched : true }
  };
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
    console.log(this.registrationForm)
  }
}
