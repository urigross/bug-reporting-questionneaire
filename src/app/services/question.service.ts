import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../components/models/question.model';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private _questions$ = new BehaviorSubject <Question[]>([]);
  constructor(private httpClient: HttpClient) { }

  async questionsQuery(): Promise<Question[]> {
    const QUESTIONS_URL = "../../assets/data/questions.json";
    const ans = await this.httpClient.get(QUESTIONS_URL);
    return new Promise (resolve=>{
      ans.pipe(
        take(1)
      )
      .subscribe(
        (data:any)=>{
          resolve(data.questions); // map questions
        }
      )
    })
    // TODO: Add error catching
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
    
  //   getQuestions(): Question[] {
  //   console.log(this._questions$.getValue())
  //   return this._questions$.getValue();
  // }
}
