import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Kerams';
  hover = true;
  showMovies = false;

displayMoviesList() {
  this.showMovies = !this.showMovies;
}

}
