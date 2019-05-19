import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionModel } from 'src/app/class/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

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

  public id: string;

  @Output()
  public getAnswer: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  sendAnswer(question): void {
    const answer = question.map(result =>
      result = new QuestionModel(result.id, result.title, result.checked, result.score));

    this.getAnswer.emit(answer);
  }
}
