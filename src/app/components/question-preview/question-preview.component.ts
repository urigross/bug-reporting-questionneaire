import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { FormControl, Validators } from '@angular/forms';
import { Choice } from 'src/app/models/choice.model';
import { ChoiceToSubmit } from 'src/app/models/choiceToSubmit.model';
import { MultipleChoiceToEdit } from 'src/app/models/multipleChoiceToEdit.model';
import { ScoreService } from 'src/app/services/score.service';



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
  @Output() onEmitChoice = new EventEmitter<ChoiceToSubmit>();
  choices: Choice[] = [];
  currChoiceScore: number = 0;
  choiceToSubmit!: ChoiceToSubmit;
  deleteChoice: boolean = false;


  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.choices = JSON.parse(JSON.stringify(this.question.choices));
  }
  onToggleChoice():void{
    if (this.question.isMultiChoice){
      this.currChoiceScore = this.scoreService.getScoreForMultipleQuestion(this.choices);
      this.deleteChoice = !this._isChoiceChecked(this.choices);
    }
    this.choiceToSubmit = {_id:this.question._id, score: this.currChoiceScore, isDeleted: this.deleteChoice}
    console.log('this.choiceToSubmit',this.choiceToSubmit)
    this.onEmitChoice.emit(this.choiceToSubmit);
  }
  private _isChoiceChecked(choices:Choice[]):boolean{
    return choices.some(choices=>choices.isSelected)
  }
}
