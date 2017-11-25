import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'

import { InterviewComponent } from './containers/interview/interview.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
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
