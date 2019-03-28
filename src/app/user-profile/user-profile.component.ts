import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'You can write your favorite citation on the input below',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  hideAge() {
    if (this.hide === true) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }
}
