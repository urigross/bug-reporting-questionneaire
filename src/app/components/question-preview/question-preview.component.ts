import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { FormControl, Validators } from '@angular/forms';
import { Choice } from 'src/app/models/choice.model';
import { ChoiceToEdit } from 'src/app/models/choiceToEdit.model';
import { MultipleChoiceToEdit } from 'src/app/models/multipleChoiceToEdit.model';



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
  @Input() formVal:any;
  @Output() onChosenChoice = new EventEmitter<ChoiceToEdit>();
  choiceControl = new FormControl('',Validators.required);
  choices: Choice[] = [];
  currChoiceScore: number = 0;
  multipleChoicesToEdit!: MultipleChoiceToEdit;
  choiceToEdit!: ChoiceToEdit;


  constructor() { }

  ngOnInit(): void {
    this.choices = JSON.parse(JSON.stringify(this.question.choices));
  }
  onToggleChoice():void{
    if (this.question.isMultiChoice){
      console.log('choices are:',this.choices)
    }
    else{
      this.choiceToEdit = {_id:this.question._id, score: this.currChoiceScore}
      this.onChosenChoice.emit(this.choiceToEdit);
    }
  }
}
