import {Component, Injectable, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AuthService } from '../../../services/auth/auth.service';
import { SignUpInfo } from '../../models/user/signup-info';
export interface Users {
   id: number;
   name: string;
   username: string;
   email: string;
   role: string;
   addedOn: string;
}

@Component({
  selector: 'app-view-wdr-users',
  templateUrl: './view-wdr-users.component.html',
  styleUrls: ['./view-wdr-users.component.scss']
})
export class ViewWdrUsersComponent implements OnInit {

displayedColumns: string[] = ['id', 'name', 'username', 'role', 'email','addedOn'];


wdrUsers: any;
dataSource: Users[] = this.wdrUsers;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: AuthService
  ) {  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers()
    .subscribe( data => {
      console.log('users');
      console.log(data);
      this.wdrUsers = data;
      console.log(this.wdrUsers);

    },
    err=> console.log(err))
  }

  deleteUser(id){
    console.log(id);
    this.userService.deleteUser(id)
    .subscribe(() =>{
      this.getUsers();
    })
  }

  editUser(user: SignUpInfo ) : void {
    localStorage.removeItem('edituserId');
    let userID = user.id.toString();
    localStorage.setItem('editUserId', userID);
    this.router.navigate(['Users/edit']);
  }
  view(user: SignUpInfo) : void {
    localStorage.removeItem('viewUserId');
    let userID = user.id.toString();
    localStorage.setItem('viewUserId', userID);
    this.router.navigate(['view-user']);

  }

}
