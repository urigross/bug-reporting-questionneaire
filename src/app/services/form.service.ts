import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceToSubmit } from '../models/choiceToSubmit.model';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _choices$ = new BehaviorSubject<ChoiceToSubmit[]>([]);
  private _questionsNum$ = new BehaviorSubject<number>(0);


  constructor( private scoreService: ScoreService) { }

  saveChoice(choice: ChoiceToSubmit): void {
    var choices: ChoiceToSubmit[] = this._choices$.getValue();
    const choiceIdx: number = choices.findIndex(_choice => _choice._id === choice._id);
    choiceIdx === -1 ? this._add(choice, choices) : this._edit(choice, choices, choiceIdx);
    console.log('CHOICES:',this._choices$.getValue(), 'IDX',choiceIdx);
    this._submitScore();
  }
  private _edit(choiceToEdit: ChoiceToSubmit, choices: ChoiceToSubmit[], idx: number):void{
    choices.splice(idx, 1, choiceToEdit);
    this._choices$.next(choices);
  }

  private _add(choiceToAdd: ChoiceToSubmit, choices: ChoiceToSubmit[]): void {
    choices.push(choiceToAdd);
    this._choices$.next(choices);
  }

  addQuestionsNum(queNum: number):void{
    this._questionsNum$.next(queNum);
  }
  
  isFormUncompleted():boolean{
    console.log('this._questionsNum$',this._questionsNum$.getValue(),'this._choices$', this._choices$.getValue().length)
    return this._questionsNum$.getValue() !== this._choices$.getValue().length;
  }
  private _submitScore():void{
    this.scoreService.sumFormScore(this._choices$.getValue());
  }
  getFormCompletionRate():number{
    const submittedChoicesNum: number =  this._choices$.getValue().length;
    return submittedChoicesNum / this._questionsNum$.getValue() * 100;
  }
}


