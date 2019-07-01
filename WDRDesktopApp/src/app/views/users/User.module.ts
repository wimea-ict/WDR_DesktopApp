import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


// Buttons Routing

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../../services/allServices';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ViewWdrUsersComponent } from './view-wdr-users/view-wdr-users.component';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';
import { RegisterComponent } from '../users/register/register.component';





// Angular

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    UsersRoutingModule,
  ],
  declarations: [
      UsersComponent,
      EditComponent,
      ViewComponent,
      ViewWdrUsersComponent,
      RegisterComponent
  ],
  providers: [
    FormBuilder,
    DataService
  ],
})
export class UsersModule { }