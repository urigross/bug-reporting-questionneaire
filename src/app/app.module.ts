import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//httpClient
import { HttpClientModule } from '@angular/common/http';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { QuestionnaireHomeComponent } from './pages/questionnaire-home/questionnaire-home.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionPreviewComponent } from './components/question-preview/question-preview.component';
// fonts
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// UI
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

//forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AnswerFilterComponent } from './components/answer-filter/answer-filter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    QuestionnaireHomeComponent,
    QuestionsListComponent,
    QuestionPreviewComponent,
    AnswerFilterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      units: '%',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
