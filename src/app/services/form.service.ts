import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Answer } from '../models/answer.model';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _answers$ = new BehaviorSubject<Answer[]>([]);
  private _questionsNum$ = new BehaviorSubject<number>(0);

  constructor() { }
  saveAnswer(answer: Answer): void {
    var answers: Answer[] = this._answers$.getValue();
    const choiceIdx: number = answers.findIndex(_choice => _choice.id === answer.id);
    choiceIdx === -1 ? this._add(answer, answers) : this._edit(answer, answers, choiceIdx);
    console.log('answers after save:', this._answers$.getValue())
  }

  getSubmittedAnswers(): Answer[] {
    return this._answers$.getValue();
  }

  deleteAnswer(answer: Answer): void {
    var choices: Answer[] = this._answers$.getValue();
    const choiceIdx: number = choices.findIndex(_choice => _choice.id === answer.id);
    choiceIdx === -1 ? console.log('Error, could not find the Choice in form Service', choices) : this._remove(choices, choiceIdx);
  }

  private _remove(choices: Answer[], idx: number): void {
    choices.splice(idx, 1);
  }

  private _edit(answerToEdit: Answer, answers: Answer[], idx: number): void {
    answers.splice(idx, 1, answerToEdit);
    this._answers$.next(answers);
  }

  private _add(answerToAdd: Answer, choices: Answer[]): void {
    choices.push(answerToAdd);
    this._answers$.next(choices);
  }

  addQuestionsNum(queNum: number): void {
    this._questionsNum$.next(queNum);
  }

  isFormCompleted(): boolean {
    console.log('this._questionsNum$', this._questionsNum$.getValue(), 'this._choices$', this._answers$.getValue().length)
    return this._questionsNum$.getValue() === this._answers$.getValue().length;
  }
  getFormCompletionRate(): number {
    const submittedChoicesNum: number = this._answers$.getValue().length;
    return submittedChoicesNum / this._questionsNum$.getValue() * 100;
  }
}
