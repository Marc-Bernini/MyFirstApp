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

    this.questions[id - 1].answer = question;
    this.getAnswer.emit(this.questions);

  }

  checkBoxChange(item) { // To display checkbox

    if (item === 'oui') {
      this.disabledNo = true;
      this.disabledYes = false;

    } else if (item === 'non') {
      this.disabledNo = false;
      this.disabledYes = true;
    }
  }
}
