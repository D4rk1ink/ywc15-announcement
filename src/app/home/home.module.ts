import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeRoutingModule } from './home-routing.module'

import { InterviewComponent } from './containers/interview/interview.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { UserRowComponent } from './components/user-row/user-row.component';

import { CeiboShare } from 'ng2-social-share';
import { UserComponent } from './containers/user/user.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CeiboShare,

    InterviewComponent,
    CardComponent,
    SearchComponent,
    UserRowComponent,
    UserComponent
  ],
  exports: [
    InterviewComponent
  ]
})
export class HomeModule { }
