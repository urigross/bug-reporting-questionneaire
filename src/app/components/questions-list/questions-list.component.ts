import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/components/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
@Input() questions :Question[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
