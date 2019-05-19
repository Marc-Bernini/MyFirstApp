import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from 'src/app/class/question.model';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.scss']
})
export class YodaComponent implements OnInit {

  public answers: Array<QuestionModel>; // array of user's answers

  public average: number;

  public response: boolean;

  public questions = [
    new QuestionModel('1', 'Aimes-tu les logiciels libres ?', this.response, 3),
    new QuestionModel('2', 'La force a-t-elle créé Linux ?', this.response, 1),
    new QuestionModel('3', 'Est-ce que le code, c\'est la vie ?', this.response, 2),
    new QuestionModel('4', 'Préfères-tu les GUI au CLI ?', this.response, 3),
    new QuestionModel('5', 'L\'histoire de la force a-t-elle été écrite par Gig ?', this.response, 2),
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
    this.answers = $event.filter(allData => allData.answer).map(onlyAnswer => onlyAnswer.answer);
  }

  calculateAverage(numberOfpoint, totalPoint): number {
    totalPoint = numberOfpoint * 10;
    return totalPoint / 10;
  }

}
