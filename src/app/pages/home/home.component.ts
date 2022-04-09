import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public jsonObj : any;

  constructor(private questionService: QuestionService) {

   }

  async ngOnInit() {
    this.jsonObj = await this.questionService.questionsQuery();
    console.log(this.jsonObj);
  }

}
