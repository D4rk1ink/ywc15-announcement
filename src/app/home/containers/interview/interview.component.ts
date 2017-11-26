import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { DbService } from '../../../shared/services/db.service'
import { Title } from '@angular/platform-browser';
import User from '../../../shared/models/user.model'

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  public selectMajor: string
  public userMajorListForSearch: any
  public userMajorList: any
  public interviewGroup$: Observable<any>
  public interviewGroup: any
  public isGamble: boolean = false
  constructor (
    private titleService: Title,
    private dbService: DbService
  ) {
    
  }

  async ngOnInit () {
    this.titleService.setTitle('YWC Announcement')
    this.selectMajor = 'CT'
    this.interviewGroup$ = this.dbService.getInterviewGroup()
    this.interviewGroup$.subscribe(interviewGroup => {
      this.interviewGroup = interviewGroup
      this.userMajorListForSearch = interviewGroup[this.selectMajor.toLowerCase()]
      this.userMajorList = interviewGroup[this.selectMajor.toLowerCase()]
    })
  }

  async onSelectMajor (major) {
    this.selectMajor = major
    switch (major) {
      case 'CT':
        return this.userMajorListForSearch = this.interviewGroup.ct
      case 'DS':
        return this.userMajorListForSearch = this.interviewGroup.ds
      case 'MK':
        return this.userMajorListForSearch = this.interviewGroup.mk
      case 'PG':
        return this.userMajorListForSearch = this.interviewGroup.pg
    }
  }

  onSearchUsers (users: User[]) {
    this.userMajorList = users
  }

  onOpenGamble () {
    this.isGamble = true
  }

  onCloseGamble (value) {
    this.isGamble = false
  }

}
