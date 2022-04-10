import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { QuestionnaireHomeComponent } from './pages/questionnaire-home/questionnaire-home.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: '', component: QuestionnaireHomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
