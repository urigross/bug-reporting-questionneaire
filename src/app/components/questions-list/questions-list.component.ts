import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChoiceToSubmit } from 'src/app/models/choiceToSubmit.model';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
@Input() questions :Question[] = [];
@Input() formVal :any;
@Output() choiceToSubmit = new EventEmitter<ChoiceToSubmit>();
constructor() { }

  ngOnInit(): void {
  }
  onEmitChoice(data:ChoiceToSubmit):void{
    this.choiceToSubmit.emit(data);
  }

}
