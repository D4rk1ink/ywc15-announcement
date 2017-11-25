import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewService } from './services/interview.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    InterviewService
  ]
})
export class SharedModule { }
