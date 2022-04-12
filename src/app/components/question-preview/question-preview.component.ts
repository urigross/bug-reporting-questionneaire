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
  choices: Choice[] = [];
  currAnswerScore!: number;
  Answer!: Answer;
  deleteChoice: boolean = false;


  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.choices = JSON.parse(JSON.stringify(this.question.choices));
  }
  onToggleChoice():void{
    if (this.question.isMultiChoice){
      this.currAnswerScore = this.scoreService.getScoreForMultipleQuestion(this.choices);
      this.deleteChoice = !this._isChoiceChecked(this.choices);
    }
    this.Answer = {
      id:this.question.id, 
      score: this.currAnswerScore, 
      isDeleted: this.deleteChoice, 
      choices: this.choices}
    console.log('this.choiceToSubmit',this.Answer)
    this.onEmitAnswer.emit(this.Answer);
  }
  private _isChoiceChecked(choices:Choice[]):boolean{
    return choices.some(choices=>choices.isSelected)
  }
  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }
}
