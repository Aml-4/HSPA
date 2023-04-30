import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
   @ViewChild('Form') MyForm !: NgForm;
   FrmErrorSubmit :boolean=false
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(Form : NgForm){
    // console.log(Form)
    console.log(this.MyForm)
    if (!this.MyForm.valid){
      this.FrmErrorSubmit =true;
    }

  }
}
