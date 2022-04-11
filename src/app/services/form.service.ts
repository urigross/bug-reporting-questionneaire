import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceToEdit } from '../models/choiceToEdit.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _choices$ = new BehaviorSubject<ChoiceToEdit[]>([]);
  private _questionsNum$ = new BehaviorSubject<number>(0);


  constructor() { }

  save(choice: ChoiceToEdit): void {
    var choices: ChoiceToEdit[] = this._choices$.getValue();
    const choiceIdx: number = choices.findIndex(_choice => _choice._id === choice._id);
    choiceIdx === -1 ? this._add(choice, choices) : this._edit(choice, choices, choiceIdx);
    console.log('CHOICES:',this._choices$.getValue(), 'IDX',choiceIdx);
  }
  private _edit(choiceToEdit: ChoiceToEdit, choices: ChoiceToEdit[], idx: number):void{
    choices.splice(idx, 1, choiceToEdit);
    this._choices$.next(choices);
  }

  private _add(choiceToAdd: ChoiceToEdit, choices: ChoiceToEdit[]): void {
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
}


