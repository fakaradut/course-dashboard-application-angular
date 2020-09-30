import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeRoutingModule } from './knowledge-routing.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { StatusCardComponent } from './status-card/status-card.component';


@NgModule({
  declarations: [CourseCardComponent, ExamCardComponent, QuestionCardComponent, StatusCardComponent],
  imports: [
    CommonModule,
    KnowledgeRoutingModule
  ],
  exports:[
    CourseCardComponent, ExamCardComponent, QuestionCardComponent, StatusCardComponent
  ]
})
export class KnowledgeModule { }
