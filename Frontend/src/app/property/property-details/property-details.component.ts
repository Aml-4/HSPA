import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
propertyId:any;
property = new property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  constructor(private route:ActivatedRoute, private router:Router, private housingservice: HousingService) { }

  ngOnInit() {
    this.propertyId= +this.route.snapshot.params['id']
    this.route.data.subscribe((data : any)=>{
      this.property = data['prp']
    })
    // this.route.params.subscribe((param:any)=>{
    //   this.propertyId = +param['id'];
    //   this.housingservice.getPropertyById(this.propertyId).subscribe((data :any) => {
    //     this.property = data
   // })
 // })
 this.galleryOptions = [
  {
    width: '100%',
    height: '400px',
    thumbnailsColumns: 4,
    imageAnimation: NgxGalleryAnimation.Slide
   }

  // // max-width 800
  //   ,{
  //   breakpoint: 800,
  //   width: '100%',
  //   height: '600px',
  //   imagePercent: 80,
  //   thumbnailsPercent: 20,
  //   thumbnailsMargin: 20,
  //   thumbnailMargin: 20
  // },
  // // max-width 400
  // {
  //   breakpoint: 400,
  //   preview: false
  // }
];

this.galleryImages = [
  {
    small:  'assets/images/internal-1.jpg',
    medium: 'assets/images/internal-1.jpg',
    big:    'assets/images/internal-1.jpg'
  },
  {
    small:  'assets/images/internal-2.jpg',
    medium: 'assets/images/internal-2.jpg',
    big:    'assets/images/internal-2.jpg'
  },
  {
    small:  'assets/images/internal-3.jpg',
    medium: 'assets/images/internal-3.jpg',
    big:    'assets/images/internal-3.jpg'
  },{
    small:  'assets/images/internal-4.jpg',
    medium: 'assets/images/internal-4.jpg',
    big:    'assets/images/internal-4.jpg'
  },
  {
    small:  'assets/images/internal-5.jpg',
    medium: 'assets/images/internal-5.jpg',
    big:    'assets/images/internal-5.jpg'
  }
];
console.log(this.galleryImages)
}
  // SelectNextProperty(){
  //   this.propertyId +=1
  //   this.router.navigate(['property-details/',this.propertyId])
  // }


}
