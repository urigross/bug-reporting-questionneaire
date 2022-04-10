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
// fonts
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/about/about.component';
import { QuestionnaireHomeComponent } from './pages/questionnaire-home/questionnaire-home.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionPreviewComponent } from './components/question-preview/question-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    QuestionnaireHomeComponent,
    QuestionsListComponent,
    QuestionPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
