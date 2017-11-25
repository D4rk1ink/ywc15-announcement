import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InterviewService } from '../../../shared/services/interview.service'
import User from '../../../shared/models/user.model'

@Component({
  selector: 'mc-gamble',
  templateUrl: './gamble.component.html',
  styleUrls: ['./gamble.component.scss']
})
export class GambleComponent implements OnInit {
  @Input('users') users: User[]
  @Output('close') close: EventEmitter<boolean>
  public currentUser: User
  private isComplete: boolean = false
  private time = [
    { time: 10, limit: 50 },
    { time: 50, limit: 20 },
    { time: 100, limit: 5 },
    { time: 200, limit: 3 },
    { time: 400, limit: 2 },
  ]
  constructor(
    private interviewService: InterviewService
  ) {
    this.close = new EventEmitter<boolean>()
  }

  ngOnInit () {
    this.random()
  }

  random () {
    let currentLoop = 0
    const loop = () => {
      let count = 0
      let limit = this.time[currentLoop].limit
      let time = this.time[currentLoop].time
      const interval = setInterval(() => {
        const index = Math.floor(Math.random() * (this.users.length - 1 - 0 + 1)) + 0;
        this.currentUser = this.users[index]
        if (count > limit) {
          clearInterval(interval)
          if (currentLoop === this.time.length - 1) {
            this.addScore()
          } else {
            currentLoop += 1
            loop()
          }
        } else {
          count += 1
        }
      }, time)
    }
    loop()
  }

  addScore () {
    this.interviewService.addScore(this.currentUser.key, this.currentUser.score + 1)
    this.isComplete = true
  }
  
  onClose () {
    this.close.emit(true)
  }

}
