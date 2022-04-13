import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { Choice } from 'src/app/models/choice.model';
import { Answer } from 'src/app/models/answer.model';
import { ScoreService } from 'src/app/services/score.service';



@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss']
})
export class QuestionPreviewComponent implements OnInit {
  @Input() question: Question = {
    id: '',
    name: '',
    isMultiChoice: false,
    title: '',
    question: '',
    choices: []
  };
  @Input() formVal:any;
  @Output() onEmitAnswer = new EventEmitter<Answer>();
  currAnswerScore!: number; // Added this varaible becase Radio buttons falsy Rendering with value of 0
  answer: Answer  = {
    id:'', 
      score: 0, 
      isDeleted: false, 
      choices: []
  };


  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.answer.choices = JSON.parse(JSON.stringify(this.question.choices));

  }
  onToggleChoice():void{
    if (this.question.isMultiChoice){
      this.currAnswerScore = this.scoreService.getScoreForMultipleQuestion(this.answer.choices);
      this.answer.isDeleted = !this._isChoiceChecked(this.answer.choices);
    }
    else{
      this.answer.isDeleted = false;
    }
    this.answer.id = this.question.id;
    this.answer.score = this.currAnswerScore;
    this.onEmitAnswer.emit(this.answer);
  }
  private _isChoiceChecked(choices:Choice[]):boolean{
    return choices.some(choices=>choices.isSelected)
  }
  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }
}
