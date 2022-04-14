import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterBy } from 'src/app/models/filterBy.model';
import { FilterService } from 'src/app/services/filter.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-answer-filter',
  templateUrl: './answer-filter.component.html',
  styleUrls: ['./answer-filter.component.scss']
})
export class AnswerFilterComponent implements OnInit, OnDestroy {

  public filterBy: FilterBy = {term:'all', isHasAnswer:'false'};
  private subscription!: Subscription;
  
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.subscription = this.filterService.filterBy$.subscribe(filterBy => this.filterBy = filterBy)
    
  }
  onSetFilter(){
    this.filterService.setFilter(this.filterBy);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

}
