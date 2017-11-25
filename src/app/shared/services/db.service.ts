import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DbService {

  private interviewGroup$: Observable<any>;
  constructor() { }

  saveToInterviewGroup (interviewGroup$: Observable<any>) {
    this.interviewGroup$ = interviewGroup$
  }

  getInterviewGroup (): Observable<any> {
    return this.interviewGroup$
  }

}
