import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { BehaviorSubject, catchError, take } from 'rxjs';
import { FormService } from './form.service';
import { Choice } from '../models/choice.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  //private _questions$ = new BehaviorSubject <Question[]>([]);
  constructor(private httpClient: HttpClient, private formService: FormService) { }

  async questionsQuery(): Promise<Question[]> {
    // TODO: Add error catching
    const QUESTIONS_URL = "../../assets/data/questions.json";
    const ans = await this.httpClient.get(QUESTIONS_URL);
    return new Promise (resolve=>{
      ans.pipe(
        take(1)
      )
      .subscribe(
        (data:any)=>{
          resolve(data.questions); // map questions
          const questionsNum: number = data.questions.length;
          this.formService.addQuestionsNum(questionsNum);
        }
      )
    })
    // ans.subscribe(
    //   (response: any) => {
    //     this._questions$.next(response) // gets the questions
    //     return this._questions$
    //     // let questionObj: Question[] = [];
    //     // questionObj = response.questions; 
    //     // return questionOb
    //   }
    //   )
    }
    
}

