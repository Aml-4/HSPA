import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { PropertyDetailsResolverService } from './services/property-details-resolver.service';
const routes: Routes = [
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-details/:id',
        component:PropertyDetailsComponent,
        resolve : {prp : PropertyDetailsResolverService}},
  {path:'user/Login',component:UserLoginComponent},
  {path:'user/Register',component:UserRegisterComponent},

   // In case of wrong URLs
  {path:'**',component:PropertyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
