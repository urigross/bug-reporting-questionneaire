import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  public async questionsQuery(): Promise<any>{
    const QUESTIONS_URL = "../../assets/data/questions.json";
    const questionsList = this.httpClient.get(QUESTIONS_URL);
    // TODO: Add error catching
    return questionsList;
  }
}
