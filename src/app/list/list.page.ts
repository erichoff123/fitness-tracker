import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor( private userService: UserService,
               private router: Router ) {
  }

  ngOnInit() {

  }

  showLogin() {
    this.router.navigateByUrl('/login');
  }

}
