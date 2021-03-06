import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { FormService } from 'src/app/services/form.service';
import { Question } from '../../models/question.model';
import { ScoreService } from 'src/app/services/score.service';
import { Answer } from 'src/app/models/answer.model';
import { HttpService } from 'src/app/services/http.service';
import { FilterService } from 'src/app/services/filter.service';
import { BehaviorSubject, observable, Observable, ReplaySubject } from 'rxjs';



@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.scss'],
})
export class QuestionnaireHomeComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(
    private questionService: QuestionService,
    private formService: FormService,
    private scoreService: ScoreService,
    private httpService: HttpService,
    private filterService: FilterService) { }

  onEmitAnswer(answer: Answer): void {
    answer.isDeleted ? this.formService.deleteAnswer(answer) : this.formService.saveAnswer(answer);
  }
  onSubmit(): void {
    if (!this.formService.isFormCompleted()) return;
    const answersToSubmit: Answer[] = this.formService.getSubmittedAnswers();
    this.scoreService.calcFormScore(answersToSubmit);
    this.httpService.saveAnswers(answersToSubmit);
    console.log('answersToSubmit',answersToSubmit);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  async ngOnInit(): Promise<void> {
    var questionsData: Question[] = await this.questionService.questionsQuery();
    this.filterService.setQuestionToFilter(questionsData)
    this.questions$ = this.filterService.getFilteredQuestions();
  }
}
