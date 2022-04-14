import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/services/form.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private formService: FormService, private scoreService: ScoreService){}
  formScore$!: Observable<number>;
  formScore:number = 0;
  get progressBarScore(){
    return this.formService.getFormCompletionRate();
  }

  ngOnInit(): void {
    this.formScore$ = this.scoreService.getFormScore();
    this.formScore$.subscribe(score=>this.formScore = score)
  }

}
