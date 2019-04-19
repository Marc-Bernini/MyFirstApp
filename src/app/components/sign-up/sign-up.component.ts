import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email = '';

  constructor() {}

  hover = true;
  showMovies = false;

  ngOnInit() {}

  displayMoviesList() {
    this.showMovies = !this.showMovies;
  }
}
