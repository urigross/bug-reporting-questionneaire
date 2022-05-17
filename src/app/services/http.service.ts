import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { take, catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Check is DB exists by fetching it's id.
  async getDatabaseId(): Promise<boolean> {
    const ANSWERS_URL = "https://627695de15458100a6b0b7e5.mockapi.io/bugReport/answers";
    const ans = await of(this.http.get(ANSWERS_URL)).pipe(
      // catchError(this.handleError)
      catchError(this._handleError<boolean>('getDatabaseId'))

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



  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }


  saveAnswers(answers: Answer[]): Observable<object> {
    const ANSWERS_URL = "https://627695de15458100a6b0b7e5.mockapi.io/bugReport/answers";
    return of(this.http.post<Object>(ANSWERS_URL, answers, this.httpOptions).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    )
    )
  }

  private async _update(answers: Answer[]) {
    const POST_ANSWERS_URL = "https://627695de15458100a6b0b7e5.mockapi.io/bugReport/answers";
    of(this.http.put<any>(POST_ANSWERS_URL, answers)).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}









