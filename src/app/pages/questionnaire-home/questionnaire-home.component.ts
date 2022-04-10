import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.scss']
})
export class QuestionnaireHomeComponent implements OnInit {
  public jsonObj : any;
  public questions : Question[] = [];

  constructor(private questionService: QuestionService) { }

  async ngOnInit(): Promise<void> {
    // this.questions await this.qu
    // this.questionService.questionsQuery();
    // this.jsonObj = await this.questionService.questionsQuery();
    this.questions =  await this.questionService.questionsQuery();
    console.log('these',this.questions)
  }

}
