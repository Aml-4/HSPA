import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { IPropertyBase } from 'src/app/models/Ipropertybase';
@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() property !:IPropertyBase;
  @Input() hideIcons !:boolean;


  ngOnInit() {
  }

}
