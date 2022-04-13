import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { FormService } from 'src/app/services/form.service';
import { Question } from '../../models/question.model';
import { ScoreService } from 'src/app/services/score.service';
import { Answer } from 'src/app/models/answer.model';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.scss'],
})
export class QuestionnaireHomeComponent implements OnInit {
  public questions: Question[] = [];

  constructor(
    private questionService: QuestionService, 
    private formService: FormService, 
    private scoreService: ScoreService,
    private httpService: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.questions = await this.questionService.questionsQuery();
    console.log('these', this.questions)
  }
  onEmitAnswer(answer: Answer): void {
    answer.isDeleted ? this.formService.deleteAnswer(answer) : this.formService.saveAnswer(answer);
  }
  onSubmit(): void {
    const answersToSubmit: Answer[] = this.formService.getSubmittedAnswers();
    this.scoreService.calcFormScore( answersToSubmit );
    this.httpService.saveAnswers( answersToSubmit );
  }
  get isFormCompleted() {
    return this.formService.isFormCompleted();
  }
}
