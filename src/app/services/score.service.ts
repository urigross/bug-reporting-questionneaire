import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceToEdit } from '../models/choiceToEdit.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private _questionsNum$ = new BehaviorSubject<number>(0);
  private _formScore$ = new BehaviorSubject<number>(0);
  

  addQuestionsNum(queNum: number):void{
    this._questionsNum$.next(queNum);
  } 
  
  sumFormScore(choices:ChoiceToEdit[]):void{
    const formScore: number = choices.reduce(function(sum, choice){
      return sum + choice.score;
    },0);
    this._formScore$.next(formScore);
  }

  getFormScore():number{
    return this._formScore$.getValue();
  }

  constructor() { }
}
