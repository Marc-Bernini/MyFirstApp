import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/class/signUp';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: SignUp = new SignUp();
  hover = true;
  showMovies = false;

  constructor() {}

  ngOnInit() { }

  displayMoviesList() {
    this.showMovies = !this.showMovies;
  }

  onSubmit() {
    // form submitted
    console.log(this.model);
    this.model.user = '';
    this.model.mail = '';
  }

}
