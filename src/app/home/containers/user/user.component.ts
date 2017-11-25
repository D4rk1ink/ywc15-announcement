import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { DbService } from '../../../shared/services/db.service'
import { Meta } from '@angular/platform-browser'
import User from '../../../shared/models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: User
  constructor (
    private metaService: Meta,
    private dbService: DbService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () {
    this.activatedRoute
    .paramMap
    .subscribe((params: ParamMap) => {
      this.findUser(params.get('id'))
    })
  }

  async findUser (userId: string) {
    const majorId = userId.slice(0, 2).toLowerCase()
    const interviewGroup$ = this.dbService.getInterviewGroup()
    interviewGroup$.subscribe(async interviewGroup => {
      if (interviewGroup) {
        this.user = await interviewGroup[majorId].find((user: User) => {
          return user.interviewRef === userId
        })
        this.metaService.addTag({ property: 'og:title', content: `คุณ ${this.user.firstName} ได้ผ่านเข้ารอบสัมภาษณ์` })
        this.metaService.addTag({ property: 'og:image', content: `/assets/imges/icon-${majorId}.png`});
      }
    })
  }

}
