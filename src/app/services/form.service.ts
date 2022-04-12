import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Answer } from '../models/answer.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _answers$ = new BehaviorSubject<Answer[]>([]);
  private _questionsNum$ = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }

    saveAnswer(answer: Answer): void {
    var answers: Answer[] = this._answers$.getValue();
    const choiceIdx: number = answers.findIndex(_choice => _choice.id === answer.id);
    choiceIdx === -1 ? this._add(answer, answers) : this._edit(answer, answers, choiceIdx); 
  }

  getSubmittedChoices():Answer[]{
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

  private _edit(choiceToEdit: Answer, choices: Answer[], idx: number): void {
    choices.splice(idx, 1, choiceToEdit);
    this._answers$.next(choices);
  }

  private async _add(answerToAdd: Answer, choices: Answer[]): Promise<void> {
    choices.push(answerToAdd);
    this._answers$.next(choices);
    await this._saveAnsToJSON(answerToAdd);
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
  private async _saveAnsToJSON(answer:Answer) {
    answer
    // TODO: Add error catching
    const ANSWERS_URL = "http://localhost:3000/answers";
    this.httpClient.post<any>(ANSWERS_URL, answer).subscribe(data => {
    })
  }

  private async _addChoiceToJSON(answer:Answer) {
    answer
    // TODO: Add error catching
    const ANSWERS_URL = "http://localhost:3000/answers/..................";
    this.httpClient.post<any>(ANSWERS_URL, answer).subscribe(data => {
    })
  }

  private async _updateAnsAtJSON(answer:Answer) {
    // TODO: Add error catching
    const ANSWERS_URL = `http://localhost:3000/answers/${answer.id}`;
    this.httpClient.patch<any>(ANSWERS_URL, {score: answer.score}).subscribe(data => {
    })
  }
}


