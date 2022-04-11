import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceToEdit } from '../models/choiceToEdit.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private _choices$ = new BehaviorSubject<ChoiceToEdit[]>([]);

  constructor() { }

  save(choice: ChoiceToEdit): void {
    var choices: ChoiceToEdit[] = this._choices$.getValue();
    const choiceIdx: number = choices.findIndex(_choice => _choice._id === choice._id);
    choiceIdx === -1 ? this._add(choice, choices) : this._edit(choice, choices, choiceIdx);
    console.log(this._choices$.getValue());
  }
  private _edit(choiceToEdit: ChoiceToEdit, choices: ChoiceToEdit[], idx: number):void{
    choices.splice(idx, 1, choiceToEdit);
    this._choices$.next(choices);
  }

  private _add(choiceToAdd: ChoiceToEdit, choices: ChoiceToEdit[]): void {
    choices.push(choiceToAdd);
    this._choices$.next(choices);
  }
  
}


