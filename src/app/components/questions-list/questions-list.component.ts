import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
@Input() questions! :Question[] | null;
@Input() formVal :any;
@Output() answerToEmit = new EventEmitter<Answer>();
constructor() { }

  ngOnInit(): void {
  }
  onEmitAnswer(data:Answer):void{
    this.answerToEmit.emit(data);
  }

}
