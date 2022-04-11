import { Component, OnInit } from '@angular/core';
import { ChoiceToEdit } from 'src/app/models/choiceToEdit.model';
import { QuestionService } from 'src/app/services/question.service';
import { FormService } from 'src/app/services/form.service';
import { Question } from '../../models/question.model';



@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.scss'],
})
export class QuestionnaireHomeComponent implements OnInit {
  public jsonObj : any;
  public questions : Question[] = [];

  constructor(private questionService: QuestionService, private formService: FormService) { }

  async ngOnInit(): Promise<void> {
    // this.questions await this.qu
    // this.questionService.questionsQuery();
    // this.jsonObj = await this.questionService.questionsQuery();
    this.questions =  await this.questionService.questionsQuery();
    console.log('these',this.questions)
  }
  onEmitChoice(data:ChoiceToEdit):void{
    //console.log(data)
    this.formService.save(data);
    
  }
  onCalc():void{
    console.log('Calculated');
  }
  get isFormUncompleted(){
    return this.formService.isFormUncompleted();
  }
}
