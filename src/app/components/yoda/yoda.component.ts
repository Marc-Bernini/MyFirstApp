import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from 'src/app/class/question.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.scss']
})
export class YodaComponent implements OnInit {

  public answers = ['oui', 'oui', 'oui', 'non', 'oui' , 'oui', 'non', 'non', 'non' , 'non']; // array of good answers

  public average: number; // user's average

  public numberOfResponse = 0; // to control checkbox clicked

  public displayAverage = false; // to display user's average

  public response: boolean; // to set QuestionModel's answer

  public questions = [ // list of questions
    new QuestionModel('1', 'Aimes-tu les logiciels libres ?', this.response, 3),
    new QuestionModel('2', 'La force a-t-elle créé Linux ?', this.response, 1),
    new QuestionModel('3', 'Est-ce que le code, c\'est la vie ?', this.response, 2),
    new QuestionModel('4', 'Préfères-tu les GUI au CLI ?', this.response, 3),
    new QuestionModel('5', 'L\'histoire de la force a-t-elle été écrite par Git ?', this.response, 2),
    new QuestionModel('6', 'La documentation est-elle le meilleur ami de la force ?', this.response, 2),
    new QuestionModel('7', 'Penses-tu que tester c\'est douter ?', this.response, 1),
    new QuestionModel('8', 'Javascript est\'il le Java du web ?', this.response, 1),
    new QuestionModel('9', 'L\'open source se situe dans les Alpes ?', this.response, 4),
    new QuestionModel('10', 'Angular est-il une pierre magique ?', this.response, 1)
  ];

  constructor() { }

  ngOnInit() {

  }

  onGetAnswer($event): void { // Get data from questionComponent and filter them to got only answer in the array
    const totalPoint = 0;
    let numberOfpoint = 0;

    const reducer = (accumulator, currentValue) => accumulator + currentValue; // method to count total of an array

    numberOfpoint = $event.reduce(reducer); // count totalPoint with reducer method

    this.numberOfResponse ++; // check the number of checkbox clicked

    this.numberOfResponse === 10 ? this.displayAverage = true : this.displayAverage = false; // display template

    this.calculateAverage(numberOfpoint, totalPoint);
  }

  calculateAverage(numberOfPoint, totalPoint): number { // return user's average
     return this.average = totalPoint  += numberOfPoint ;
  }

}
