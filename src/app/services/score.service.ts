import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private _questionsNum$ = new BehaviorSubject<number>(0);

  addQuestionsNum(queNum: number):void{
    this._questionsNum$.next(queNum);
  }  

  constructor() { }
}
