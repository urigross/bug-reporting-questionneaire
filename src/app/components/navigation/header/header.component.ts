import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable, ReplaySubject } from 'rxjs';
import { FormService } from 'src/app/services/form.service';
import { ScoreService } from 'src/app/services/score.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private formService: FormService, private scoreService: ScoreService){}

  faBars = faBars;
  faTimes = faTimes;
  mobileMenuOn= false;
  formScore$!: Observable<number>;
  formScore:number = 0;
// Because the dual layout (mobile + desktop) of menu - Couldn't use toggleMenu
  onOpenMenu(){
    this.mobileMenuOn = true;
  }
  onCloseMenu(){
    this.mobileMenuOn = false;
  }
  get progressBarScore(){
    return this.formService.getFormCompletionRate();
  }
  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }

  ngOnInit(): void {
    this.formScore$ = this.scoreService.getFormScore();
    this.formScore$.subscribe(score=>this.formScore = score)
  }
}


