import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './containers/interview/interview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InterviewComponent
  ],
  exports: [
    InterviewComponent
  ]
})
export class HomeModule { }
