import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule} from '@angular/common/http'
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HousingService } from './services/housing.service';
import { UserServiceService } from './services/user-service.service';
import { AlertfiyService } from './services/alertfiy.service';
import { AuthService } from './services/auth.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TabsModule}  from 'ngx-bootstrap/tabs';
import { ButtonsModule} from 'ngx-bootstrap/buttons';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { PropertyDetailsResolverService } from './services/property-details-resolver.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({

  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertfiyService,
    AuthService,
    PropertyDetailsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
