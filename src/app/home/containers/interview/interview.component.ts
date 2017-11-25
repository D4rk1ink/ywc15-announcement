import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { DbService } from '../../../shared/services/db.service'

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  public userMajorList: any
  public interviewGroup$: Observable<any>

  constructor (
    private dbService: DbService
  ) { }

  ngOnInit () {
    const a = new Observable<any>()
    
    this.interviewGroup$ = this.dbService.getInterviewGroup()
    // this.interviewGroup$
    //   .subscribe(res => console.log(res))
  }

  async selectMajor (major) {
    switch (major) {
      case 'CT':
        return this.userMajorList = (await this.interviewGroup$.toPromise()).ct
      case 'DS':
        return this.userMajorList = (await this.interviewGroup$.toPromise()).ds
      case 'MK':
        return this.userMajorList = (await this.interviewGroup$.toPromise()).mk
      case 'PG':
        return this.userMajorList = (await this.interviewGroup$.toPromise()).pg
    }
  }

}
