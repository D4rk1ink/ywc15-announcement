import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import User from '../../../shared/models/user.model'

@Component({
  selector: 'mc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input('major') major: string
  @Input('users') users: User[]
  @Output('search') search: EventEmitter<any>
  
  public placeholderText: string = ''
  public searchText: string = ''

  constructor () {
    this.search = new EventEmitter<any>()
  }

  ngOnChanges () {
    if (this.users) {
      this.onSearchChange(this.searchText)
    }
    if (this.major) {
      switch (this.major) {
        case 'CT':
          return this.placeholderText = 'web content'
        case 'DS':
          return this.placeholderText = 'web design'
        case 'MK':
          return this.placeholderText = 'web marketing'
        case 'PG':
          return this.placeholderText = 'web programming'
      }
    }
  }
 
  ngOnInit () {

  }

  onSearchChange (name) {
    const users = this.users.filter((user: User) => {
      const fullName = `${user.firstName} ${user.lastName}`
      return new RegExp(`${this.searchText}`).test(fullName)
    })
    this.search.emit(users)
  }

}
