import { Component, OnInit } from '@angular/core';
import { QuestionModel } from 'src/app/class/question.model';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.scss']
})
export class YodaComponent implements OnInit {

  public answers: Array<QuestionModel>;
  public average: number;
  public question: Array<QuestionModel>;

  constructor() { }

  ngOnInit() {
  }

  onGetAnswer($event): void {
    this.answers = $event;
    console.log(this.answers);

  }

  calculateAverage(numberOfpoint, totalPoint): number {
    totalPoint = numberOfpoint * 10;
    return totalPoint / 10;
  }

}
