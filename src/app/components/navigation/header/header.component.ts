import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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


