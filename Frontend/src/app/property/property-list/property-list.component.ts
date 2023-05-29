import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/Ipropertybase';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent:number=1
properties : Array<IPropertyBase>=[];
City='';
searchCity='';
sortByParam='';
sortDirection='';
//properties :any;
  constructor(private route:ActivatedRoute,private housingsrv:HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
        this.SellRent=2
    }
    this.housingsrv.getAllHouses(this.SellRent).subscribe(res =>{
      this.properties=res
      const newProperty =JSON.parse(localStorage.getItem('newProp'))
      if(newProperty?.SellRent == this.SellRent){
        this.properties =[newProperty , ...this.properties]
      }
      console.log(this.route.snapshot.url.toString())
    },error=>{console.log(error)})
  }
  cityFilter(){
    this.searchCity=this.City;
  }
  cityFilterClear(){
    this.City ='';
    this.searchCity=this.City;
  }
  sortDirectionFilter(){
    if(this.sortDirection =='desc')
    this.sortDirection ='asc'
    else
    this.sortDirection ='desc'

  }
}
