import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { take } from 'rxjs';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private httpClient: HttpClient, private formService: FormService) { }

  async questionsQuery(): Promise<Question[]> {
    const QUESTIONS_URL = "../../assets/data/questions.json";
    const ans = await this.httpClient.get(QUESTIONS_URL);
    return new Promise(resolve => {
      ans.pipe(
        take(1)
      )
        .subscribe(
          (data: any) => {
            resolve(data.questions); // map questions
            const questionsNum: number = data.questions.length;
            this.formService.addQuestionsNum(questionsNum);
          }
        )
    })
  }

}

