import { Component, OnInit, Input } from '@angular/core';
import User from '../../../shared/models/user.model'

@Component({
  selector: 'mc-user',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnInit {

  @Input('user') user: User

  public repoUrl = 'https://github.com/Epotignano/ng2-social-share'
  public imageUrl = 'https://avatars2.githubusercontent.com/u/10674541?v=3&s=200'
  constructor() { }

  ngOnInit() {
  }

}
