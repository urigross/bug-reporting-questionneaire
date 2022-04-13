import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  async saveAnswers(answers: Answer[]) {
    const objToJSON: object = { "id": 1, 'answers': answers };
    let isUpdate:boolean = await this.getDatabaseId();
    if (isUpdate) {
      console.log('answers update')
      this._update(answers);
    }
    else {
      console.log('answers new save')
      this._save(objToJSON);
    }
    // TODO: Add error catching
  }

  async getDatabaseId(): Promise<boolean>{
    // TODO: Add error catching
    const ANSWERS_URL = "http://localhost:3000/bugReportForm";
    const ans = await this.httpClient.get(ANSWERS_URL);
    return new Promise(resolve => {
      ans.pipe(
        take(1)
      )
        .subscribe(
          (data: any) => {
            resolve(data.length !== 0); // check is DB exists;
          }
        )
    })
  }

  private async _save(objToJSON: Object) {
    const ANSWERS_URL = "http://localhost:3000/bugReportForm";
    this.httpClient.post<any>(ANSWERS_URL, objToJSON).subscribe(data => {
    })
  }

  private async _update(answers: Answer[]) {
    const POST_ANSWERS_URL = "http://localhost:3000/bugReportForm/1";
    this.httpClient.put<any>(POST_ANSWERS_URL, answers).subscribe(data => { })
  }
}






