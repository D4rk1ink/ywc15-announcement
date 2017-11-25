import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { DbService } from '../../../shared/services/db.service'
import User from '../../../shared/models/user.model';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  public selectGroup: string
  public userMajorListForSearch: any
  public userMajorList: any
  public interviewGroup$: Observable<any>

  constructor (
    private dbService: DbService
  ) { }

  async ngOnInit () {
    this.interviewGroup$ = this.dbService.getInterviewGroup()
    this.selectGroup = 'CT'
    this.userMajorListForSearch = (await this.interviewGroup$.toPromise()).ct
    this.userMajorList = (await this.interviewGroup$.toPromise()).ct
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

  onSearchUsers (users: User[]) {
    this.userMajorList = users
  }

}
