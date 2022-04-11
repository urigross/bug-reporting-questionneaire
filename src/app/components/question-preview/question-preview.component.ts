import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { FormControl, Validators } from '@angular/forms';
import { Choice } from 'src/app/models/choice.model';
import { ChoiceToEdit } from 'src/app/models/choiceToEdit.model';



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
  @Output() onChosenChoice = new EventEmitter<ChoiceToEdit>();
  choiceControl = new FormControl('',Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  choices: Choice[] = [];
  markedChoice!: Choice;
  choiceToEdit!: ChoiceToEdit;


  constructor() { }

  ngOnInit(): void {
    this.choices = JSON.parse(JSON.stringify(this.question.choices));
  }
  onToggleChoice():void{
    this.choiceToEdit = {_id:this.question._id, value: this.markedChoice.score}
    this.onChosenChoice.emit(this.choiceToEdit);
  }
}
