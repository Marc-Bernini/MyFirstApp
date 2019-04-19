import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Order } from 'src/app/class/order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email = '';
  model: Order = new Order();
  hover = true;
  showMovies = false;
  constructor() {}

  ngOnInit() {}

  displayMoviesList() {
    this.showMovies = !this.showMovies;
  }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

}
