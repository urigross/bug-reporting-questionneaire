import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  async saveAnswers( answers: Answer[]) {
    // TODO: Add error catching
    const ANSWERS_URL = "http://localhost:3000/answers";
    this.httpClient.post<any>(ANSWERS_URL, answers).subscribe(data => {
    })
  }

  // private async _addChoiceToJSON(answer:Answer) {
    
  //   // TODO: Add error catching
  //   const ANSWERS_URL = "http://localhost:3000/answers/..................";
  //   this.httpClient.post<any>(ANSWERS_URL, answer).subscribe(data => {
  //   })
  // }

  // private async _updateAnsAtJSON(answer:Answer) {
  //   // TODO: Add error catching
  //   const ANSWERS_URL = `http://localhost:3000/answers/${answer.id}`;
  //   this.httpClient.patch<any>(ANSWERS_URL, {score: answer.score}).subscribe(data => {
  //   })
  // }
}






