import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Kerams';
  hover = true;
  displayMovies = false;

displayMoviesList() {
  this.displayMovies = !this.displayMovies;
}

}
