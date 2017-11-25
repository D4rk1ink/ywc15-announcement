import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InterviewService } from './services/interview.service'
import { DbService } from './services/db.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    InterviewService,
    DbService
  ]
})
export class SharedModule { }
