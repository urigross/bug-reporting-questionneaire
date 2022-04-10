import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireHomeComponent } from './questionnaire-home.component';

describe('QuestionnaireHomeComponent', () => {
  let component: QuestionnaireHomeComponent;
  let fixture: ComponentFixture<QuestionnaireHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
