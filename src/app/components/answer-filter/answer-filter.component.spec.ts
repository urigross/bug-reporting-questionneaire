import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFilterComponent } from './answer-filter.component';

describe('AnswerFilterComponent', () => {
  let component: AnswerFilterComponent;
  let fixture: ComponentFixture<AnswerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
