export class QuestionModel {

  constructor(
    public id: string,
    public title: string,
    public answer: boolean,
    public score: number,
  ) {}
}
