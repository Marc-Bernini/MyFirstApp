import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuestionModel } from 'src/app/class/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  yes = 'oui'; // To get answer from template
  no = 'non'; // To get answer from template

  disabledYes = false; // To enable checkbox
  disabledNo = false; // To enable checkbox

  userScore = [];

  goodAnswer = ['oui', 'oui', 'oui', 'non', 'oui' , 'oui', 'non', 'non', 'non' , 'non'];

  @Input()
  public question: string; // To display question in template. Get it from yodaComponent

  @Input()
  public id: string; // To display id in template. Get it from yodaComponent

  @Input()
  public questions: Array<QuestionModel>; // To get all data from yodaComponent, allow to upload responses

  @Output()
  public getAnswer: EventEmitter<any> = new EventEmitter(); // To emit new data with answers to yodaComponent

  constructor() { }

  ngOnInit() {
  }

  sendAnswer(question, id): void { // get the answers from the template

    question === this.goodAnswer[id - 1] ? question = true : question = false; // convert answer to boolean

    this.questions[id - 1].answer = question; // upload questions['id of checkbox'].answer with user's answer

    if (this.questions[id - 1].answer === true) { // upload value's answer with good score
      this.questions[id - 1].score = this.questions[id - 1].score;

    } else {
      this.questions[id - 1].score = 0;

    }

    this.userScore = this.questions.map(data => data.score); // extract score and put it in a userScore[]

    this.getAnswer.emit(this.userScore); // emit userScore to Yoda Component
  }

  checkBoxChange(item) { // To display checkbox

    if (item === 'oui') {
      this.disabledNo = true;
      this.disabledYes = true;

    } else if (item === 'non') {
      this.disabledNo = true;
      this.disabledYes = true;
    }
  }
}
