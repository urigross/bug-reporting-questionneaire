import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterBy } from '../models/filterBy.model';
import { Question } from '../models/question.model';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _filterBy$ = new BehaviorSubject<FilterBy>({isHasAnswer:'false', term:''});
  public filterBy$ = this._filterBy$.asObservable();
  private questions$ = new BehaviorSubject<Question[]>([]);
  private _filteredQuestions$ = new BehaviorSubject<Question[]>([]);
  public filteredQuestions$ = this._filteredQuestions$.asObservable();


  constructor() { }

  setFilter(filterBy: FilterBy):void{
    this._filterBy$.next(filterBy);
    this.query();
  }

  public setQuestionToFilter(questions: Question[]):void{
    this.questions$.next(questions);
    this.query();
  }
  
  public query(): void {
    const questions = this.questions$.getValue();
    const filterBy = this._filterBy$.getValue();
    let questionsToReturn: Question[] = _.cloneDeep(questions);
    if (filterBy && filterBy.isHasAnswer || filterBy.term){
      questionsToReturn = this._filter(questionsToReturn, filterBy.term, filterBy.isHasAnswer);
    }
    this._filteredQuestions$.next(questionsToReturn);
  }

  public getFilteredQuestions(): Observable<Question[]>{
    return this.filteredQuestions$;
  }

  private _filter(questions: Question[], term: string, isHasAnswer:string ) : Question[]{
    term = term.toLocaleLowerCase();
    var questionsToFilter: Question[] = this._filterByTerm(questions, term);
    return this._filterByIsHasAnswer(questionsToFilter, isHasAnswer )
  }

  private _filterByTerm(questions: Question[], term: string): Question[]{
    return questions.filter(quesion=> 
      quesion.question.toLocaleLowerCase().includes(term) 
    );
  }

  private _filterByIsHasAnswer(questions: Question[], isHasAnswer: string): Question[]{
    if( isHasAnswer === 'all') return questions;
    var isAnswered!: boolean;
    if ( isHasAnswer === 'true') isAnswered = true;
    if ( isHasAnswer === 'false') isAnswered = false;
    return questions.filter(question=> question.isHasAnswer === isAnswered);
  }

}
