import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChoiceToEdit } from 'src/app/models/choiceToEdit.model';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
@Input() questions :Question[] = [];
@Output() onEmitChoice = new EventEmitter<ChoiceToEdit>();
constructor() { }

  ngOnInit(): void {
  }
  onChosenChoice(data:ChoiceToEdit):void{
    this.onEmitChoice.emit(data);
  }

}
