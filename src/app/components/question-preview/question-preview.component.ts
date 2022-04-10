import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { FormControl, Validators } from '@angular/forms';
import { Choice } from 'src/app/models/choice.model';



@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss']
})
export class QuestionPreviewComponent implements OnInit {
  @Input() question: Question = {
    _id: '',
    name: '',
    isMultiChoice: false,
    title: '',
    question: '',
    choices: []
  };
  @Output() onChoiceValue = new EventEmitter<number>();
  choiceControl = new FormControl('',Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  choices: Choice[] = JSON.parse(JSON.stringify(this.question.choices));


  constructor() { }

  ngOnInit(): void {
  }
  onToggleChoice():void{
    console.log('toggle');
  }

}
