import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent} from './edit/edit.component';
import { ViewComponent} from './view/view.component';
import { ViewWdrUsersComponent } from './view-wdr-users/view-wdr-users.component';
import { RegisterComponent } from '../users/register/register.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'edit'
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Add new User'
        }
      },
      {
        path: 'edit',
        component: EditComponent,
        data: {
          title: 'Edit User Details'
        }
      },
      {
        path: 'view',
        component: ViewComponent,
        data: {
          title: 'View Users'
        }
      },
      {
        path: 'view-wdr-users',
        component: ViewWdrUsersComponent,
        data: {
          title: 'View Wdr Users'
        }
      },
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}