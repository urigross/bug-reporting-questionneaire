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
  private _formScoreToRender$ = this._formScore$.asObservable();
  constructor() { }
  
  
  addQuestionsNum(queNum: number):void{
    this._questionsNum$.next(queNum);
  } 

  calcFormScore(choices: ChoiceToSubmit[]):void{
    console.log(choices);
    const formScore: number = choices.reduce((sum, choice)=>{
      return sum + choice.score;
    },0);
    console.log(formScore);
    this._formScore$.next(formScore);
  }

  getFormScore(){
    return this._formScoreToRender$;
  }

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
}
