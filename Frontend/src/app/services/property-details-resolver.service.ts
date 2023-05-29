import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { property } from '../models/property';
import { Observable, catchError, of } from 'rxjs';
import { HousingService } from './housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsResolverService implements Resolve<property>{

constructor(private housingservice: HousingService, private router:Router) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
Observable<property>|property {
  const PropId = route.params['id']
  return this.housingservice.getPropertyById(+PropId).pipe(
    catchError(error =>{
      this.router.navigate(['/'])
      return of(null)
    })
  );
}
}
