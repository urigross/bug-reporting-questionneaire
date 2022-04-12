import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Choice } from '../models/choice.model';
import { ChoiceToSubmit } from '../models/choiceToSubmit.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private _questionsNum$ = new BehaviorSubject<number>(0);
  private _formScore$ = new BehaviorSubject<number>(0);
  

  addQuestionsNum(queNum: number):void{
    this._questionsNum$.next(queNum);
  } 
  
  sumFormScore(choices: ChoiceToSubmit[]):void{
    const formScore: number = choices.reduce(function(sum, choice){
      return sum + choice.score;
    },0);
    this._formScore$.next(formScore);
  }

  getFormScore():number{
    return this._formScore$.getValue();
  }

  // getScoreForMultipleQuestion(choices:Choice[]):number{
  //   const selectedChoicesNum = this._getSelectedChoicesNum(choices);
  //   const seletcedChoicesNumber = this._getSelectedChoicesScore(choices);
  //   if( selectedChoicesNum)
  //   return selectedChoicesCount
  // }

  // private _getSelectedChoicesScore(choices:Choice[]): number{
  //   const selectedScore: number = choices.filter((choice: Choice)=> choice.isSelected === true)
  //     .reduce(function(sum, choice){return sum + choice.score},0)
  //   return selectedScore;
  // }

  getScoreForMultipleQuestion(choices:Choice[]):number{
    var selectedChoicesCount: number = 0;
    var selectedChoicesScore: number = 0;
    choices.forEach(choice => {
      if (choice.isSelected) {
        selectedChoicesCount++;
        selectedChoicesScore += choice.score;
      }
    });
    return selectedChoicesCount === 1 ? selectedChoicesScore /2 : selectedChoicesScore;
  }
  constructor() { }
}
