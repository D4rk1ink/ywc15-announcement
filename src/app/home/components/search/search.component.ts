import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../../shared/models/user.model'

@Component({
  selector: 'mc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input('users') users: User[]
  @Output('search') search: EventEmitter<any>
  
  public searchText: string

  constructor () {
    this.search = new EventEmitter<any>()
  }
 
  ngOnInit () {

  }

  onSearchChange (name) {
    const users = this.users.filter((user: User) => {
      const fullName = `${user.firstName} ${user.lastName}`
      return new RegExp(`${name}`).test(fullName)
    })
    this.search.emit(users)
  }

}
