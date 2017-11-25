import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { DbService } from '../../../shared/services/db.service'
import User from '../../../shared/models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: User
  constructor (
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
    const interviewGroup = await this.dbService.getInterviewGroup().toPromise()
    this.user = interviewGroup[majorId].find((user: User) => {
      return user.interviewRef === userId
    })
    console.log(this.user)
  }

}
