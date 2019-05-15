import { Component, OnInit } from '@angular/core';
import { Developer } from '../../class/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  developers: object;

  constructor() { }

  ngOnInit() {
    this.developers = new Developer(
      'Marc',
      'Bernini',
      33,
      'Male',
      'Junio Developer',
      [
        {
          name: 'Angular',
          logo: 'https://angular.io/assets/images/logos/angular/angular.png',
          site: 'https://marc-bernini.github.io/WildPicture/'
        },
        {
          name: 'Javascript',
          logo: 'https://cutt.ly/FypLQV',
          site: 'https://github.com/Marc-Bernini'
        }
      ]
    );
  }

}
