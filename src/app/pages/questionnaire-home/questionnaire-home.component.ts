import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.scss']
})
export class QuestionnaireHomeComponent implements OnInit {
  public jsonObj : any;

  constructor(private questionService: QuestionService) { }

  async ngOnInit(): Promise<void> {
    this.jsonObj = await this.questionService.questionsQuery();
    console.log(this.jsonObj);
  }

}
