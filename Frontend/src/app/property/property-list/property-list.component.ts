import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent:number=1
properties : Array<IProperty>=[];
//properties :any;
  constructor(private route:ActivatedRoute,private housingsrv:HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
        this.SellRent=2
    }
    this.housingsrv.getAllHouses(this.SellRent).subscribe(res =>{
      this.properties=res
      console.log(this.route.snapshot.url.toString())
    },error=>{console.log(error)})
  }

}
