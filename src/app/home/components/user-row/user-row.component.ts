import { Component, OnInit, Input } from '@angular/core'
import { InterviewService } from '../../../shared/services/interview.service'
import User from '../../../shared/models/user.model'
@Component({
  selector: 'mc-user',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnInit {

  @Input('user') user: User

  public shareUrl = ''
  constructor (
    private interviewService: InterviewService
  ) { }

  ngOnInit () {
    const userId = this.user.interviewRef
    const majorId = userId.slice(0, 2)
    this.shareUrl = `http://${location.host}/${majorId}/${userId}`
  }

  addScore () {
    this.interviewService.addScore(this.user.key, this.user.score + 1)
  }
}
