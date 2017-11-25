import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { InterviewService } from './shared/services/interview.service'
import { DbService } from './shared/services/db.service'
import filterMajor from './shared/utils/filter-major.util'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isLoading: boolean = true
  
  constructor (
    private dbService: DbService,
    private interviewService: InterviewService
  ) {
    if (!this.dbService.getInterviewGroup()) {
      this.interviewService.queryInterview()
        .then((res: any[]) => {
          let data = new Observable<any>(observer => {
            observer.next(filterMajor(res))
            observer.complete()
          })
          this.dbService.saveToInterviewGroup(data)
          this.isLoading = false
        })
    }
  }
}
