import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/components/models/question.model';

@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss']
})
export class QuestionPreviewComponent implements OnInit {
  @Input() question: Question =  {
    _id: '',
    name: '',
    type: '',
    title: '',
    question: '',
    choices: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
