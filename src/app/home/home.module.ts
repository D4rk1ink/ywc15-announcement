import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './containers/interview/interview.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InterviewComponent,
    CardComponent
  ],
  exports: [
    InterviewComponent
  ]
})
export class HomeModule { }
