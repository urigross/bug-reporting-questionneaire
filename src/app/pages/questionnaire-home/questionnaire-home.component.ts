import { Component, OnInit } from '@angular/core';
import { ChoiceToSubmit } from 'src/app/models/choiceToSubmit.model';
import { QuestionService } from 'src/app/services/question.service';
import { FormService } from 'src/app/services/form.service';
import { Question } from '../../models/question.model';
import { ScoreService } from 'src/app/services/score.service';



@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.scss'],
})
export class QuestionnaireHomeComponent implements OnInit {
  public jsonObj: any;
  public questions: Question[] = [];

  constructor(private questionService: QuestionService, private formService: FormService, private scoreService: ScoreService) { }

  async ngOnInit(): Promise<void> {
    this.questions = await this.questionService.questionsQuery();
    console.log('these', this.questions)
  }
  onEmitChoice(choice: ChoiceToSubmit): void {
    choice.isDeleted ? this.formService.deleteChoice(choice) : this.formService.saveChoice(choice);
  }
  onCalc(): void {
    this.scoreService.calcFormScore(this.formService.getSubmittedChoices());
  }
  get isFormCompleted() {
    return this.formService.isFormCompleted();
  }
}
