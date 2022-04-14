import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { take, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  async saveAnswers(answers: Answer[]) {
    const objToJSON: object = { "id": 1, 'answers': answers };
    let isUpdate:boolean = await this.getDatabaseId();
    if (isUpdate) {
      this._update(answers);
    }
    else {
      this._save(objToJSON);
    }
  }

  async getDatabaseId(): Promise<boolean>{
    const ANSWERS_URL = "http://localhost:3000/bugReportForm";
    const ans = await this.httpClient.get(ANSWERS_URL).pipe(
      catchError(this.handleError)
    )
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

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  private async _save(objToJSON: Object) {
    const ANSWERS_URL = "http://localhost:3000/bugReportForm";
    this.httpClient.post<any>(ANSWERS_URL, objToJSON).subscribe(data => {
    })
  }

  private async _update(answers: Answer[]) {
    const POST_ANSWERS_URL = "http://localhost:3000/bugReportForm/1";
    this.httpClient.put<any>(POST_ANSWERS_URL, answers).subscribe(
      val => {
        console.log("PUT call successful value returned in body", 
                    val);
    },
    response => {
        console.log("PUT call in error", response);
    },
    () => {
        console.log("The PUT observable is now completed.");
    }
    )
  }
}
     
  







