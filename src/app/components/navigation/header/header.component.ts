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
export class HeaderComponent{
  constructor() { }
  faBars = faBars;
  faTimes = faTimes;
  mobileMenuOn= false;
 
// Because the dual layout (mobile + desktop) of menu - Couldn't use toggleMenu
  onOpenMenu(){
    this.mobileMenuOn = true;
  }
  onCloseMenu(){
    this.mobileMenuOn = false;
  }



}


