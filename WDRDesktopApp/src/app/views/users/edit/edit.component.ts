import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpInfo } from '../../models/user/signup-info';
import { AuthService } from '../../../services/allServices';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: any = {}; // any =[]


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: AuthService
  ) { }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('editUserId'));
    console.log(userId);
    if(!userId) {
      alert('Invalid action.');
      this.router.navigate(['view-wdr-users']);
      return;
    } else {
      this.getSingleUser(userId);
    }
  }

  getSingleUser(userId) {
    this.dataService.getUserDetails(+userId)
    .subscribe( user => {
      console.log(user);
      this.user = user;
    }, err => console.log(err));
  }

  updateUser() {
    console.log('update user function');
    console.log(this.user);
    this.dataService.updateUser(this.user)
    .subscribe( res => {
      this.router.navigate(['view-wdr-users']);

    }, err => console.log(err));
  }

  backToViewUsers(){
      this.router.navigate(['view-wdr-users']);
  }
}
