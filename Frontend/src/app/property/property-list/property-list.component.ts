import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
properties : Array<IProperty>=[];
//properties :any;
  constructor(private housingsrv:HousingService) { }

  ngOnInit() {
    this.housingsrv.getAllHouses().subscribe(res =>{
      this.properties=res
    },error=>{console.log(error)})
  }

}
