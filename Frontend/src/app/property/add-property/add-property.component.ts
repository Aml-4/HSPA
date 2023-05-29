import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/models/Ipropertybase';
import { AlertfiyService } from 'src/app/services/alertfiy.service';
import { property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
   //@ViewChild('Form') MyForm !: NgForm;
   prop = new property();
   @ViewChild('formTabs') formTabs !:TabsetComponent;
   addPropertyForm :FormGroup;
   FrmErrorSubmit :boolean=false;
   PropertyTypes:Array<string>=['House','Apartment','Duplex'];
   FurnishTypes:Array<string>=['Fully','Semi','UnFurnished'];
   Directions:Array<string>=['Norht','West','East','South'];
   Descison:Array<string>=['Yes','No'];
   SellRentTypes:Array<string>=['Sell','Rent'];
   propertyPreview:IPropertyBase ={
    Id: null,
    Name: null,
    SellRent:null,
    PType:null,
    FType:null,
    Price :null,
    BHK:null,
    BuiltArea:null,
    City:null,
    RTM:null
  };
  NextbtnClicked:boolean=false;

  constructor(private fb: FormBuilder,
    private router:Router,
    private alertify:AlertfiyService,
    private housingservice:HousingService) { }

  mapProperty(){
    this.prop.Id=this.housingservice.newPropID();
    this.prop.SellRent= +this.SellRent.value;
    this.prop.BHK= this.BHK.value;
    this.prop.PType = this.PType.value;
    this.prop.FType= this.FType.value;
    this.prop.Name =this.Name.value;
    this.prop.City =this.City.value;
    this.prop.Price= this.Price.value;
    this.prop.BuiltArea =this.BuiltArea.value;
    this.prop.Security =this.Security.value;
    this.prop.Maintenance=this.Maintenance.value;
    this.prop.CarpetArea =this.CarpetArea.value;
    this.prop.FloorNo= this.FloorNo.value;
    this.prop.TotalFloor = this.TotalFloor.value;
    this.prop.Address =this.Address.value;
    this.prop.Address2=this.LandMarks.value;
    this.prop.RTM= this.RTM.value;
    this.prop.AOP=this.AOP.value;
    this.prop.Gated=this.Gated.value;
    this.prop.MainEntrance=this.MainEntrance.value;
    this.prop.Possession=this.PossessionOn.value;
    this.prop.Description=this.Description.value;
    this.prop.PostedOn=new Date().toString();
  }
  ngOnInit() {
      this.createPropertyForm();
  }

  createPropertyForm(){
    this.addPropertyForm=this.fb.group({
      BasicInfo:this.fb.group({
        SellRent :['1', Validators.required],
        PType :[null, Validators.required],
        FType:[null, Validators.required],
        Name :[null, Validators.required],
        BHK:[null, Validators.required],
        City:[null, Validators.required]
      }),
      PriceInfo:this.fb.group({
        Price :[null, Validators.required],
        BuiltArea :[null, Validators.required],
        CarpetArea:[null],
        Security:[null],
        Maintenance:[null]
      }),
      AddressInfo:this.fb.group({
        FloorNo:[null],
        TotalFloor:[null],
        Address:[null,Validators.required],
        LandMarks:[null]
      }),
      OtherDetails:this.fb.group({
        RTM:[null, Validators.required],
        PossessionOn:[null],
        AOP:[null],
        Gated:[null],
        MainEntrance:[null],
        Description:[null]
      })
    })
  }
  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(){
  if(this.AllTabsValidations()){
    this.mapProperty();
    this.housingservice.addProperty(this.prop);
    this.alertify.success('Congrats, Your Property Listed successfully on our website');
    console.log(this.addPropertyForm)
    if(this.SellRent.value ==='2'){
      this.router.navigate(['/rent-property'])
    }else {
      this.router.navigate(['/'])
    }
  }
  else{
    this.alertify.error('Please Review the form and provide all valid entries');
    this.FrmErrorSubmit =true;
  }

  }
  AllTabsValidations():boolean{
    if(this.BasicInfo.invalid){
      this.NextbtnClicked=true;
      this.formTabs.tabs[0].active=true;
      return false;
    }
    if(this.PriceInfo.invalid){
      this.NextbtnClicked=true;
      this.formTabs.tabs[1].active=true;
      return false;
    }
    if(this.AddressInfo.invalid){
      this.NextbtnClicked=true;
      this.formTabs.tabs[2].active=true;
      return false
    }
    if(this.OtherDetails.invalid){
      this.NextbtnClicked=true;
      this.formTabs.tabs[3].active=true;
      return false;
    }
    return true;
  }
  selectTab(tabId:number, IsCurrentTabValid?:boolean){
    console.log(this.BasicInfo)
    this.NextbtnClicked=true
    if(IsCurrentTabValid)
    this.formTabs.tabs[tabId].active=true;
  }
  //#region GetterMethods
  //#region FormGroups
  get BasicInfo(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup
  }
  get PriceInfo(){
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup
  }
  get AddressInfo(){
    return this.addPropertyForm.controls['AddressInfo'] as FormGroup
  }
  get OtherDetails(){
    return this.addPropertyForm.controls['OtherDetails'] as FormGroup
  }
  //#endregion
  //#region FormControls
  get SellRent(){
    return this.BasicInfo.controls['SellRent'] as FormControl
  }
  get BHK(){
    return this.BasicInfo.controls['BHK'] as FormControl
  }
  get PType(){
    return this.BasicInfo.controls['PType'] as FormControl
  }
  get FType(){
    return this.BasicInfo.controls['FType'] as FormControl
  }
  get Name(){
    return this.BasicInfo.controls['Name'] as FormControl
  }
  get City(){
    return this.BasicInfo.controls['City'] as FormControl
  }
  get Price(){
    return this.PriceInfo.controls['Price'] as FormControl
  }
  get BuiltArea(){
    return this.PriceInfo.controls['BuiltArea'] as FormControl
  }
  get Security(){
    return this.PriceInfo.controls['Security'] as FormControl
  }
  get Maintenance(){
    return this.PriceInfo.controls['Maintenance'] as FormControl
  }
  get CarpetArea(){
    return this.PriceInfo.controls['CarpetArea'] as FormControl
  }

  get Address(){
    return this.AddressInfo.controls['Address'] as FormControl
  }
  get FloorNo(){
    return this.AddressInfo.controls['FloorNo'] as FormControl
  }
  get TotalFloor(){
    return this.AddressInfo.controls['TotalFloor'] as FormControl
  }
  get LandMarks(){
    return this.AddressInfo.controls['LandMarks'] as FormControl
  }
  get RTM(){
    return this.OtherDetails.controls['RTM'] as FormControl
  }
  get PossessionOn(){
    return this.OtherDetails.controls['PossessionOn'] as FormControl
  }
  get AOP(){
    return this.OtherDetails.controls['AOP'] as FormControl
  }
  get Gated(){
    return this.OtherDetails.controls['Gated'] as FormControl
  }
  get MainEntrance(){
    return this.OtherDetails.controls['MainEntrance'] as FormControl
  }
  get Description(){
    return this.OtherDetails.controls['Description'] as FormControl
  }

  //#endregion
  //#endregion
}
